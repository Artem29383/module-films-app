import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import filmsReducer from '../models/filmlist/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';


const saga = createSagaMiddleware();

const reducer = combineReducers(
  {
    films: filmsReducer
  }
);


const store = createStore(reducer, composeWithDevTools(applyMiddleware(saga)));
saga.run(rootSaga);

export default store;