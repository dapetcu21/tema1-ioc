import { SAMPLE_INCREMENT } from '../constants/ActionTypes';

export default function sampleCounter(state = 0, action) {
  if (action.type === SAMPLE_INCREMENT) {
    return state + action.amount;
  }
  return state;
}
