import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('authToken');
  if(authToken == '') {
    return next(req);
  }
  const clonedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });
  return next(clonedReq);
};
