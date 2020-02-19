import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

export const getStatusLoading = state => {
  return state.film.isLoading;
};

export const getFilmSelector = state => {
  return state.film.film;
};

export const getFieldsSelector = createSelector([getFilmSelector], (film) => {
  return memoize(() => {
    return Object.keys(film || []).filter(value => (value !== 'id' && value !== 'fields'));
  });
});