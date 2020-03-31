import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class LogHeadersInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`HTTP: Log headers:`);
    let headerList: { key: string; values: string }[] = [];
    req.headers.keys().map(key => {
      headerList.push({ key, values: req.headers.getAll(key).toString() });
    });
    console.table(headerList);
    return next.handle(req);
  }
}
