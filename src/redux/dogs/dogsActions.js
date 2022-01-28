import {
  FETCH_DOGS_REQUEST,
  FETCH_DOGS_SUCCESS,
  FETCH_DOGS_FAILURE,
} from './dogsTypes';
import { DOGS_API, API_KEY, CORS_PROXY } from '../../lib/api';

export const fetchDogsRequest = () => ({
  type: FETCH_DOGS_REQUEST,
});

export const fetchDogsSuccess = (dogs) => ({
  type: FETCH_DOGS_SUCCESS,
  payload: dogs,
});

export const fetchDogsFailure = (error) => ({
  type: FETCH_DOGS_FAILURE,
  payload: error,
});

export const fetchDogs = () => (dispatch) => {
  dispatch(fetchDogsRequest());

  fetch(`${CORS_PROXY}/${DOGS_API}?limit=50&order=ASC&api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      const dogs = data;
      // console.log(dogs);
      dispatch(fetchDogsSuccess(dogs));
    })
    .catch((error) => {
      dispatch(fetchDogsFailure(error.message));
    });
};
