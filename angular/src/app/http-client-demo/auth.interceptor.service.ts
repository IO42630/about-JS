import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


export class AuthInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('request left');
        // req is immutable
        const mreq = req.clone({ headers: req.headers.append('foo', 'baar') });
        return next.handle(mreq);
    }

}
