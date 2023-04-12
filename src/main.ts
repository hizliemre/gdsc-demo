import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
const routes: Routes = [
  {
    path: 'counter',
    loadComponent: () => import('./app/counter-app/counter-app.component')
  },
  {
    path: 'todo',
    loadComponent: () => import('./app/todo-app/todo-app.component'),
  },
  {
    path: 'fetch-data',
    loadComponent: () => import('./app/fetch-data-app/fetch-data-app.component')
  }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
})
