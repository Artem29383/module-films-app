import API from '../api/api';
import {
  call,
  takeEvery,
  put
} from 'redux-saga/effects'
import {
  GET_FILMS,
  POST_FILM,
  POST_FILM_SUCCESS,
  PUT_FILMS,
  SET_INIT
} from '../models/filmlist/action';
import {
  normalize,
  schema
} from 'normalizr';

function* postFilm(action) {
  try {
    yield call(API.postCreateFilms, action.payload.id, action.payload.payload);
    yield put({
      type: POST_FILM_SUCCESS,
      payload: true
    })
  } catch (e) {
    console.log(e);
  }
}


function* getFilms() {
  try {
    const payload = yield call(API.getFilms);
    const filmsSchema = new schema.Entity('filmsList');
    const filmsListSchema = [filmsSchema];
    const dataNormalized = normalize(payload.data, filmsListSchema);
    yield put({
      type: PUT_FILMS,
      payload: {
        entities: dataNormalized.entities.filmsList,
        ids: dataNormalized.result
      }
    });
    yield put({ type: SET_INIT });
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeEvery(POST_FILM, postFilm);
  yield takeEvery(GET_FILMS, getFilms);
}
