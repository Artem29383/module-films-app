import { applyMiddleware, combineReducers, createStore } from 'redux';
import filmsReducer from '../models/filmlist/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../api/sagas';

const saga = createSagaMiddleware();

const reducer = combineReducers(
  {
    films: filmsReducer
  }
);

const store = createStore(reducer, applyMiddleware(saga));
saga.run(rootSaga);

export default store;