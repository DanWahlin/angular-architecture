import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = this.auth.getAuthorizationToken();
    const authReq = req.clone({
      setHeaders: { Authorization: authHeader, 'Content-Type': 'application/json' }
    });

    console.log(`HTTP: Adding headers`);
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}
