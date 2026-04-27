import { RenderMode, ServerRoute,  } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  
  {
    path: 'plan',
    renderMode: RenderMode.Server
  },
  {
    path: 'myplans',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
