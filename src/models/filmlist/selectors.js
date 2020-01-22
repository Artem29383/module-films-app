import { createSelector } from 'reselect';

const getInit = state => {
  return state.films.init;
};

export const getIsPost = state => {
  return state.films.isPost;
};

export const getInitSelector = createSelector([getInit], init => init);

