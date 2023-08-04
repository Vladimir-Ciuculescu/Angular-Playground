import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, res: HttpHandler) {
    console.log('Request is on the way !');
    //If you want to modify a request before being sent !
    const modifiedRequest = req.clone({
      headers: req.headers.append('Blablabla', 'xyz'),
    });

    //You can also manipulate the response
    return res.handle(modifiedRequest).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          console.log('Response arrived, body data:');
          console.log(event.body);
        }
      })
    );
  }
}
