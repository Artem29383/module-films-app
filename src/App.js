import React, { Fragment, useEffect } from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import classes from './App.module.scss';
import useSelector from './hooks/useSelector';
import useAction from './hooks/useAction';
import { FILM_PAGE, HOME_PAGE } from './routes';

import { GET_FILMS } from './models/filmlist/action';
import { getInitSelector } from './models/filmlist/selectors';
import HomePage from './pages/HomePage';
import FilmPage from './pages/FilmPage';


const App = () => {
  const isInit = useSelector(getInitSelector);
  const getFilms = useAction(GET_FILMS);
  
  useEffect(() => {
    getFilms();
  }, [getFilms]);
  
  
  return (
    <Fragment>
      {isInit &&
      <div className={classes.content}>
        <Switch>
          <Route path={HOME_PAGE} exact render={() => <HomePage />} />
          <Route path={FILM_PAGE} render={() => <FilmPage />} />
          <Redirect to='/' />
        </Switch>
      </div>
      }
    </Fragment>
  );
};

export default App;
