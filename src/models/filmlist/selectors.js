import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const getInit = state => {
  return state.films.init;
};

export const getIsPost = state => {
  return state.films.isPost;
};

const getFilms = state => {
  return state.films.filmsList.entities;
};

const getIds = state => {
  return state.films.filmsList.ids;
};

export const getInitSelector = createSelector([getInit], init => init);

export const getFilmsSelector = createSelector([getFilms], films => films);

export const getFieldsSelector = createSelector([getFilms, getIds], (films) => {
  return memoize(id => {
    return Object.keys(films[id] || []).filter(value => (value !== 'id' && value !== 'fields'));
  });
});

export const getFilteredItems = createSelector([getFilms, getIds], (films, ids) => {
  return memoize(search => {
    return ids.filter(item => (films[item].name.toLowerCase().includes(search.toLowerCase())));
  })
});