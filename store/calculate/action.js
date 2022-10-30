import { SUM, MINUS } from './constants';

export const sumValues = (payload) => (dispatch) => {
  return dispatch({ type: SUM, payload: Object({ ...payload }) })
}
export const minusValues = (payload) => (dispatch) => {
  return dispatch({ type: MINUS, payload: Object({ ...payload }) })
}
