import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store, { history } from './state/Store';
import { ConnectedRouter } from 'connected-react-router'

ReactDOM.render(<Provider store={store}>
  <ConnectedRouter history={history}>
    <App />
  </ConnectedRouter>
</Provider>, document.getElementById('root'));
