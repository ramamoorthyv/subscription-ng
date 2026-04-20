import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptorInterceptor } from './auth-interceptor-interceptor';

const serverConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptorInterceptor])),
    provideServerRendering(withRoutes(serverRoutes))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
