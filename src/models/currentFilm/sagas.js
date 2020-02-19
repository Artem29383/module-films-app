import API from '../../api/api';
import { takeEvery, call, put } from '@redux-saga/core/effects';
import {
  GET_FILM,
  GET_FILM_SUCCESS,
  SET_LOADING_FILM, UPDATE_FILM_FIELD,
  UPDATE_FILM_FIELDS_SUCCESS
} from './action';
import { push } from 'connected-react-router'
import { UPDATE_FILMS_SUCCESS } from '../filmlist/action';


function* getFilm(action) {
  try {
    const payload = yield call(API.getFilm, action.payload);
    
    yield put({
      type: GET_FILM_SUCCESS,
      payload: payload.data
    });
  } catch (e) {
    yield put(push('/'));
    yield put({
      type: SET_LOADING_FILM,
      payload: false
    });
  }
}


function* updateFilmField(action) {
  try {
    yield call(API.updateFilm, action.payload.id, action.payload.payload);
    
    yield put({
      type: UPDATE_FILMS_SUCCESS,
      payload: {
        id: action.payload.id,
        obj: action.payload.payload
      }
    });
    
    yield put({
      type: UPDATE_FILM_FIELDS_SUCCESS,
      payload: action.payload.payload
    });
    
  } catch (e) {
    console.log(e);
  }
}



export default function* rootSagaFilm() {
  yield takeEvery(GET_FILM, getFilm);
  yield takeEvery(UPDATE_FILM_FIELD, updateFilmField);
}