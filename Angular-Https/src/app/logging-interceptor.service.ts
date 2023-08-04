import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, res: HttpHandler) {
    console.log('Here is the logging interceptor');
    return res.handle(req);
  }
}
