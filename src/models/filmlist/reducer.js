import {
  POST_FILM_SUCCESS,
  PUT_FILMS,
  SET_INIT
} from './action';

const initialState = {
  filmsList: [],
  init: false,
  isPost: false
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    
    case PUT_FILMS: {
      const { entities, ids } = action.payload;
      return {
        ...state, filmsList: {
          entities, ids
        }
      }
    }
    
    
    case POST_FILM_SUCCESS: {
      return { ...state, isPost: action.payload };
    }
    
    
    case SET_INIT: {
      return {
        ...state, init: true
      }
    }
    
    default: {
      return state;
    }
  }
};

export default filmsReducer;