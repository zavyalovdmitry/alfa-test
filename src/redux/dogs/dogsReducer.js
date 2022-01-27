/* eslint-disable default-param-last */
import {
  FETCH_DOGS_REQUEST,
  FETCH_DOGS_SUCCESS,
  FETCH_DOGS_FAILURE,
} from './dogsTypes';

const initialState = {
  loading: false,
  dogs: [],
  error: '',
};

const dogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DOGS_SUCCESS:
      return {
        loading: false,
        dogs: action.payload,
        error: '',
      };
    case FETCH_DOGS_FAILURE:
      return {
        loading: false,
        dogs: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dogsReducer;
