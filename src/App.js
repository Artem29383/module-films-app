import React from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import Home from './pages/home/Home';

const App = () => {
  return (
    <Switch>
      <Route path='/home' component={Home} />
      <Redirect to='/home' />
    </Switch>
  );
};

export default App;
