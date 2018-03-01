import { Home } from './home';
import { Some } from './some';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    exact: true,
  },
  {
    path: '/some',
    name: 'some',
    component: Some,
    exact: false,
  },
];
