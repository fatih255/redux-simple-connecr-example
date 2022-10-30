import { SUM,MINUS } from './constants'

const countInitialState = {
  result: 0,
}

export default function reducer(state = countInitialState, action) {
  switch (action.type) {
    case SUM:
      return Object.assign({}, state, {
        result: parseInt(action.payload.firstNumber) + parseInt(action.payload.secondNumber),
      })
    case MINUS:
      return Object.assign({}, state, {
        result: parseInt(action.payload.firstNumber) - parseInt(action.payload.secondNumber),
      })
    default:
      return state
  }
}
