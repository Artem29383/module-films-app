import React, { Fragment, useEffect } from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';
import classes from './App.module.scss';
import useSelector from './hooks/useSelector';
import { getInitSelector } from './models/filmlist/selectors';
import useAction from './hooks/useAction';
import { GET_FILMS } from './models/filmlist/action';
import routes from './routes';

const App = () => {
  const isInit = useSelector(getInitSelector);
  const getFilms = useAction(GET_FILMS);
  
  useEffect(() => {
    getFilms();
  }, [getFilms]);
  
  
  const routs = routes.map(({ path, component: Component }) => {
      return (
        <Route
          key={path}
          path={path}
          render={props => <Component {...props} />}
        />
      )
    }
  );
  
  
  return (
    <Fragment>
      {isInit &&
      <div className={classes.content}>
        {routs}
        <Redirect to='/' />
      </div>
      }
    </Fragment>
  );
};

export default App;
