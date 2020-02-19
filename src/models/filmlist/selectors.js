import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

export const getIsPost = state => {
  return state.films.isPost;
};

const getFilms = state => {
  return state.films.filmsList.entities;
};

const getIds = state => {
  return state.films.filmsList.ids;
};

export const getFilmsSelector = createSelector([getFilms], films => films);

export const getFilteredItems = createSelector([getFilms, getIds], (films, ids) => {
  return memoize(search => {
    return ids.filter(item => (films[item].name.toLowerCase().includes(search.toLowerCase())));
  })
});