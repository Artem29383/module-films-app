import HomePage from './pages/HomePage';
import Film from './pages/FilmPage/Film';

export default [
  {
    exact: true,
    path: ['/', '/films/:id'],
    component: HomePage
  },
  {
    exact: true,
    path: '/films/:id',
    component: Film
  }
]