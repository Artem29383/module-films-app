import React, { Fragment, useEffect } from 'react';
import {
  Redirect,
  Route, Switch,
} from 'react-router-dom';

import classes from './App.module.scss';
import useSelector from './hooks/useSelector';
import useAction from './hooks/useAction';
import routes, { FILM_PAGE, HOME_PAGE } from './routes';

import { GET_FILMS } from './models/filmlist/action';
import { getInitSelector } from './models/filmlist/selectors';
import HomePage from './pages/HomePage';
import Film from './pages/FilmPage/Film';


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
          <Redirect to='/' />
        </Switch>
        <Route path={FILM_PAGE} exact render={() => <Film />} />
      </div>
      }
    </Fragment>
  );
};

export default App;
