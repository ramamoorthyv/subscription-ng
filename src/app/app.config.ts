import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient,withInterceptors, withFetch } from '@angular/common/http';
import { authInterceptorInterceptor } from './auth-interceptor-interceptor';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';



export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient( withInterceptors([authInterceptorInterceptor]),withFetch()),
    provideRouter(routes), 
    provideClientHydration(withEventReplay())
  ]
};



// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideHttpClient(withInterceptors([authInterceptorInterceptor]), withFetch()),
//     provideBrowserGlobalErrorListeners(),
//     provideRouter(routes),    
//     provideClientHydration(withEventReplay())
//   ]
// };
