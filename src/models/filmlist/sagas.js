import {
  call,
  takeEvery,
  put
} from 'redux-saga/effects'
import {
  normalize,
  schema
} from 'normalizr';
import API from '../../api/api';
import {
  ADD_FILM,
  DELETE_FILM,
  GET_FILMS,
  POST_FILM,
  POST_FILM_SUCCESS,
  PUT_FILMS,
  DELETE_FILM_SUCCESS,
} from './action';


function* postFilm(action) {
  try {
    yield call(API.postCreateFilms, action.payload.payload);
    yield put({
      type: ADD_FILM,
      payload: {
        id: action.payload.payload.id,
        payload: action.payload.payload
      }
    });
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
        entities: dataNormalized.entities.filmsList || {},
        ids: dataNormalized.result
      }
    });
  } catch (e) {
    console.log(e);
  }
}


function* deleteFilm(action) {
  try {
    yield call(API.deleteFilm, action.payload);
    yield put({
      type: DELETE_FILM_SUCCESS,
      payload: action.payload
    });
  } catch (e) {
    console.log(e);
  }
}




export default function* rootSagaFilmsList() {
  yield takeEvery(POST_FILM, postFilm);
  yield takeEvery(GET_FILMS, getFilms);
  yield takeEvery(DELETE_FILM, deleteFilm);
}
