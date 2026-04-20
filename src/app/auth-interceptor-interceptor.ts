import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('authToken');
  console.log('Auth token from localStorage:', authToken);
  if(authToken == '') {
    return next(req);
  }
  const clonedReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  });
  console.log('Intercepted request with auth token:', clonedReq);
  return next(clonedReq);
};
