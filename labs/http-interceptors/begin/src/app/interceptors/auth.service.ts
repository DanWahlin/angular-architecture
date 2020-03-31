import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  getAuthorizationToken() {
    return [
      'Basic your-token-goes-here'
      // 'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
      // 'Accept': 'application/json;odata=verbose'
    ];
  }
}
