import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()
export class TransformResponseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          if (event.url && event.url.indexOf('speakers') >= 0 && Array.isArray(event.body)) {
            let body = event.body.map(speaker => {
              if (speaker.name.match(/rey/i)) {
                speaker.name = 'Rey Skywalker';
              }
              return speaker;
            });
            console.log(`HTTP: Request transformed`);
            return event.clone({ body });
          }
          return event.clone(); // undefined means dont change it
          // return event.clone(undefined); // undefined means dont change it
        }
      })
    );
  }
}
