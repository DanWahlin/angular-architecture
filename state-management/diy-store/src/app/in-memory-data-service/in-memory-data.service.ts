import { Injectable } from '@angular/core';

import { RequestInfo, InMemoryDbService, RequestInfoUtilities } from 'angular-in-memory-web-api';
import { customers, orders } from './mock-data';

/** In-memory database data */
interface Db {
  [collectionName: string]: any[];
}

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  /** True if in-mem service is intercepting; all requests pass thru when false. */
  active = true;
  maxId = 0;

  /** Create the in-memory database.*/
  createDb(reqInfo?: RequestInfo) {
    return structuredClone({ customers, orders }); // make a copy of the mock data
  }

  /**
   * Simulate generating new Id on the server
   * All collections in this db have numeric ids.
   * Seed grows by highest id seen in any of the collections.
   */
  genId(collection: { id: number }[], collectionName: string) {
    this.maxId =
      1 +
      collection.reduce((prev, cur) => Math.max(prev, cur.id || 0), this.maxId);
    return this.maxId;
  }

  /** Override the default parser. For debugging. */
  parseRequestUrl(url: string, utils: RequestInfoUtilities) {
    const parsed = utils.parseRequestUrl(url);
    return null; // let default parser handle it
  }

  /** Override the default GET handler. For debugging.*/
  get(reqInfo: RequestInfo) {
    return undefined; // let the default GET handle it
  }

  /** Override the default POST handler. For debugging. */
  post(reqInfo: RequestInfo) {
    return undefined; // let the default POST handle it
  }

}
