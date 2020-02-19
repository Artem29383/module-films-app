import { all } from '@redux-saga/core/effects';
import rootSagaFilmsList from '../models/filmlist/sagas';
import rootSagaFilm from '../models/currentFilm/sagas';

export  function* rootSaga() {
  yield all([
    rootSagaFilmsList(),
    rootSagaFilm()
  ])
}