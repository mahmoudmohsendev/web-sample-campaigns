import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      // Handle successful responses
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body && event.body.data !== undefined) {
            return event.clone({ body: event.body.data });
          }
        }
        return event;
      }),
      // Handle errors
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // TODO: redirect to login page
          // TODO: Show a toast message
        }

        return throwError(() => error);
      })
    );
  }
}
