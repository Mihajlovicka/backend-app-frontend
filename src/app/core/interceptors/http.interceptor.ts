import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PopupHandlerService } from '../services/popup-handler.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
  constructor(
    private popupHandler: PopupHandlerService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.popupHandler.openSnackbar('Success!', 'success');
          return event.clone({ body: event.body.result });
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.popupHandler.openSnackbar('Unauthorized');
          this.router.navigate(['/auth/login']);
        } else if (error.status === 403) {
          this.popupHandler.openSnackbar('Forbidden');
          this.router.navigate(['/auth/login']);
        } else if (error.status === 400) {
          this.popupHandler.openSnackbar(error.error.errorMessage);
        } else if (error.status === 500) {
          this.popupHandler.openSnackbar(error.error.message);
        } else {
          this.popupHandler.openSnackbar(
            'An error occurred. Please try again.'
          );
        }
        return throwError(() => error);
      })
    );
  }
}
