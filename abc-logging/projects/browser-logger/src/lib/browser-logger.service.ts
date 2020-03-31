import { Injectable, Inject } from '@angular/core';

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
  constructor(@Inject('env') private env) {}

  info(value: any, ...rest: any[]): void {
    if (!this.env.production) {
      console.info(value, rest);
    } else {
      // App Insights or your favorite service
    }
  }

  log(value: any, ...rest: any[]): void {
    if (!this.env.production) {
      console.log(value, rest);
    } else {
      // App Insights or your favorite service
    }
  }

  warn(value: any, ...rest: any[]): void {
    if (!this.env.production) {
      console.warn(value, rest);
    } else {
      // App Insights or your favorite service
    }
  }

  error(value: any, ...rest: any[]): void {
    if (!this.env.production) {
      console.error(value, rest);
    } else {
      // App Insights or your favorite service
    }
  }
}
