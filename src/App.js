import React, { Fragment, useEffect } from 'react';
import {
  Route,
} from 'react-router-dom';

import classes from './App.module.scss';
import useSelector from './hooks/useSelector';
import useAction from './hooks/useAction';
import routes from './routes';

import { GET_FILMS } from './models/filmlist/action';
import { getInitSelector } from './models/filmlist/selectors';


const App = () => {
  const isInit = useSelector(getInitSelector);
  const getFilms = useAction(GET_FILMS);
  
  useEffect(() => {
    getFilms();
  }, [getFilms]);
  
  
  const routs = routes.map(({ exact, path, component: Component }) => {
      return (
        <Route
          exact = {exact}
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
        </div>
      }
    </Fragment>
  );
};

export default App;
