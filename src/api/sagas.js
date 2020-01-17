import API from './../api/api';
import {
  call,
  takeEvery
} from 'redux-saga/effects'
import { POST_FILM } from '../models/filmlist/action';


function* postFilm(action) {
  try {
    yield call(API.postCreateFilms, action.payload.id, action.payload.payload);
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeEvery(POST_FILM, postFilm)
}
