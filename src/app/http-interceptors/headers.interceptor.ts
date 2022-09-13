import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  private isProduction: boolean = environment.production;
  private isDev: boolean = !environment.production;
  private apiHost: string = environment.apiHost;
  private apiKey: string = environment.apiKey;

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.isProduction) {
      request = request.clone({
        setHeaders: {
          'x-rapidapi-host': this.apiHost,
          'x-rapidapi-key': this.apiKey,
          useQueryString: 'true',
        },
      });
    }

    if (this.isDev) {
      request = request.clone({
        setHeaders: {
          'x-rapidapi-host': this.apiHost,
          'x-rapidapi-key': this.apiKey,
          useQueryString: 'true',
        },
      });
    }

    return next.handle(request).pipe(
      tap(
        (response) => console.log('What is the response?: ', response),
        (error) => console.log('Something fucked up')
      )
    );
  }
}
