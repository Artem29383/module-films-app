import {
  GET_FILM_SUCCESS,
  SET_LOADING_FILM,
  UPDATE_FILM_FIELDS_SUCCESS
} from './action';

const initialState = {
  film: {},
  isLoading: false,
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
  
    case GET_FILM_SUCCESS: {
      return  {...state, film: action.payload, isLoading: false};
    }
    
    case SET_LOADING_FILM: {
      return {...state, isLoading: action.payload}
    }
    
  
    case UPDATE_FILM_FIELDS_SUCCESS: {
      return {
        ...state,
        film: action.payload
      };
    }
    
    
    default: {
      return state;
    }
  }
};

export default filmReducer;