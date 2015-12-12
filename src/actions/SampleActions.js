import { SAMPLE_INCREMENT } from '../constants/ActionTypes';

export function sampleIncrement(amount = 1) {
  return { type: SAMPLE_INCREMENT, amount };
}
