import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import filmsReducer from '../models/filmlist/reducer';
import rootSaga from '../models/filmlist/sagas';


const saga = createSagaMiddleware();

const reducer = combineReducers(
  {
    films: filmsReducer
  }
);


const store = createStore(reducer, composeWithDevTools(applyMiddleware(saga)));
saga.run(rootSaga);

export default store;