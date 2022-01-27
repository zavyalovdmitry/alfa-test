import {
  FETCH_DOGS_REQUEST,
  FETCH_DOGS_SUCCESS,
  FETCH_DOGS_FAILURE,
} from './dogsTypes';
import { DOGS_API, API_KEY } from '../../lib/api';

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

  fetch(`${DOGS_API}?limit=10&api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      const dogs = data;
      console.log(dogs);
      dispatch(fetchDogsSuccess(dogs));
    })
    .catch((error) => {
      dispatch(fetchDogsFailure(error.message));
    });
};
