import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import filmsReducer from '../models/filmlist/reducer';
import filmReducer from '../models/currentFilm/reducer';
import { rootSaga } from './rootSaga';
import { connectRouter, routerMiddleware  } from 'connected-react-router'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory();
const saga = createSagaMiddleware();

const reducer = history => combineReducers(
  {
    films: filmsReducer,
    film: filmReducer,
    router: connectRouter(history),
  }
);

const store = createStore(reducer(history),
  composeWithDevTools(applyMiddleware(saga, routerMiddleware(history))));
saga.run(rootSaga);

export default store;