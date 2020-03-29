import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()
export class LogResponseTimeInterceptor implements HttpInterceptor {
  /**
   * Credit: https://angular.io/guide/http#http-interceptors
   */
  // intercept_alternative(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const started = Date.now();
  //   return next.handle(req).pipe(
  //     tap(event => {
  //       if (event instanceof HttpResponse) {
  //         const elapsed = Date.now() - started;
  //         console.log(`HTTP: Request for ${req.urlWithParams} took ${elapsed} ms.`);
  //       }
  //     })
  //   );
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    let ok: string;

    return next.handle(req).pipe(
      tap(
        // Succeeds when there is a response; ignore other events
        event => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
        // Operation failed; error is an HttpErrorResponse
        error => (ok = 'failed')
      ),
      // Log when response observable either completes or errors
      finalize(() => {
        const elapsed = Date.now() - started;
        console.log(`${req.method} "${req.urlWithParams}" \n\t ${ok} in ${elapsed} ms.`);
      })
    );
  }
}
