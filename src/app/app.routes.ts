import { Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'articles',
    pathMatch: 'full',
  },
  {
    path: 'articles',
    loadChildren: () => import('./pages/articles/routes').then((r) => r.routes),
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
