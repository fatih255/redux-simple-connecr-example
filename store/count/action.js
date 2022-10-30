import { ADD } from './constants';

export const addCount = () => (dispatch) => {
  return dispatch({ type: ADD })
}
