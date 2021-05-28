import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiAuthService } from '../api/auth/api-auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private auth: ApiAuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.auth.curUser && this.auth.curUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.curUser.token}`,
        },
      });
    }

    return next.handle(request);
  }
}
