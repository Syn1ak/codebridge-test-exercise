import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./list/articles-list.component').then(
        (c) => c.ArticlesListComponent
      ),
  },
  {
    path: ':id/view',
    loadComponent: () =>
      import('./view/article-view.component').then(
        (c) => c.ArticleViewComponent
      ),
  },
];
