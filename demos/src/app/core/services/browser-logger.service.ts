import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

interface LoggingFunction {
  (value: any, ...rest: any[]): void;
}
export interface LoggerService {
  info: LoggingFunction;
  log: LoggingFunction;
  warn: LoggingFunction;
  error: LoggingFunction;
}

@Injectable({ providedIn: 'root' })
export class BrowserLoggerService implements LoggerService {
  info(value: any, ...rest: any[]): void {
    if (!environment.production) {
      console.info(value, rest);
    } else {
      // App Insights or your favorite service
    }
  }

  log(value: any, ...rest: any[]): void {
    if (!environment.production) {
      console.log(value, rest);
    } else {
      // App Insights or your favorite service
    }
  }

  warn(value: any, ...rest: any[]): void {
    if (!environment.production) {
      console.warn(value, rest);
    } else {
      // App Insights or your favorite service
    }
  }

  error(value: any, ...rest: any[]): void {
    if (!environment.production) {
      console.error(value, rest);
    } else {
      // App Insights or your favorite service
    }
  }
}
