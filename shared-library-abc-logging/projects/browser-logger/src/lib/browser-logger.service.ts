import { Injectable, Inject } from '@angular/core';

interface LoggingFunction {
  (...args: any[]): void;
}
export interface LoggerService {
  info: LoggingFunction;
  log: LoggingFunction;
  warn: LoggingFunction;
  error: LoggingFunction;
}

@Injectable({ providedIn: 'root' })
export class BrowserLoggerService implements LoggerService {
  constructor(@Inject('env') private env: any) {}

  info(...args: any[]): void {
    if (!this.env.production) {
      console.info.apply(null, args);
    } else {
      // App Insights or your favorite service
    }
  }

  log(...args: any[]): void {
    if (!this.env.production) {
      console.log.apply(null, args);
    } else {
      // App Insights or your favorite service
    }
  }

  warn(...args: any[]): void {
    if (!this.env.production) {
      console.warn.apply(null, args);
    } else {
      // App Insights or your favorite service
    }
  }

  error(...args: any[]): void {
    if (!this.env.production) {
      console.error.apply(null, args);
    } else {
      // App Insights or your favorite service
    }
  }
}
