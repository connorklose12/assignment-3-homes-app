import { Routes } from '@angular/router';
import { Home } from './Home';
import { Details } from './Details';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: Details,
    title: 'Home Details',
  },
];