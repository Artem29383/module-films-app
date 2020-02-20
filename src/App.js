import React, { useEffect } from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import classes from './App.module.scss';
import useAction from './hooks/useAction';
import {
  FILM_PAGE,
  HOME_PAGE
} from './routes';
import { GET_FILMS } from './models/filmlist/action';
import HomePage from './pages/HomePage';
import FilmPage from './pages/FilmPage';

const App = () => {
  const getFilms = useAction(GET_FILMS);
  
  useEffect(() => {
    getFilms();
  }, [getFilms]);
  
  return (
      <div className={classes.content}>
        <Switch>
          <Route path={HOME_PAGE} exact render={() => <HomePage />} />
          <Route path={FILM_PAGE} render={() => <FilmPage />} />
          <Redirect to='/' />
        </Switch>
      </div>
  );
};

export default App;
