import {
  ADD_FILM,
  POST_FILM_SUCCESS,
  PUT_FILMS,
  DELETE_FILM_SUCCESS,
  UPDATE_FILMS_SUCCESS
} from './action';
import deepCopy from '../../utils/deepCopy';
import { removePropFromObject } from '../../utils/removePropFromObject';
import { removeArrayElement } from '../../utils/removeArrayElement';

const initialState = {
  filmsList: {
    entities: [],
    ids: []
  },
  isPost: false
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    
    case PUT_FILMS: {
      const { entities, ids } = action.payload;
      return {
        ...state,
        filmsList: {
          entities, ids
        }
      }
    }
    
    case ADD_FILM: {
      const { id, payload } = action.payload;
      const { entities, ids } = deepCopy(state.filmsList);
      entities[id] = payload;
      ids.push(id);
      return {
        ...state,
        filmsList: {
          entities, ids
        }
      };
    }
    
    
    case DELETE_FILM_SUCCESS: {
      const { entities, ids } = deepCopy(state.filmsList);
      return {
        ...state,
        filmsList: {
          ...state.filmsList,
          entities: removePropFromObject(entities, action.payload),
          ids: removeArrayElement(ids, action.payload)
        }
      };
    }
    
    
    case UPDATE_FILMS_SUCCESS: {
      const { id, obj } = action.payload;
      const { entities, ids } = deepCopy(state.filmsList);
      entities[id] = obj;
      return {
        ...state,
        filmsList: { entities, ids }
      };
    }
    
    
    case POST_FILM_SUCCESS: {
      return { ...state, isPost: action.payload };
    }
    
    
    default: {
      return state;
    }
  }
};

export default filmsReducer;