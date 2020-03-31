import { Component } from '@angular/core';
import { BrowserLoggerService } from 'browser-logger';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div>ABC Logging Demo</div>
      <div class="log-buttons">
        <div class="log-col">
          <button class="btn" (click)="logInfo()">info</button>
        </div>
        <div class="log-col">
          <button class="btn" (click)="logLog()">log</button>
        </div>
        <div class="log-col">
          <button class="btn" (click)="logWarn()">warn</button>
        </div>
        <div class="log-col">
          <button class="btn" (click)="logError()">error</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .log-buttons {
        display: grid;
        grid-template-columns: 80px 80px 80px 80px;
        grid-gap: 2px 2px;
      }
      .log-col {
        padding: 4px;
      }
      .btn {
        width: 60px;
        background-color: #38a3d8;
        color: #fff;
        cursor: pointer;
      }
    `
  ]
})
export class AppComponent {
  title = 'abc-logging';

  constructor(private browserLogger: BrowserLoggerService) {
    browserLogger.info('here is info');
    browserLogger.log('here is log');
    browserLogger.warn('here is warn');
    browserLogger.error('here is error');
  }

  logInfo() {
    this.browserLogger.info('here is info');
  }
  logLog() {
    this.browserLogger.log('here is log');
  }
  logError() {
    this.browserLogger.error('here is info');
  }
  logWarn() {
    this.browserLogger.warn('here is warn');
  }
}
