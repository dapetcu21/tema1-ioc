import { SAMPLE_INCREMENT } from '../constants/ActionTypes';
import { createAction } from 'redux-actions';

export const sampleIncrement = createAction(SAMPLE_INCREMENT, (amount = 1) => amount);

// Does the same thing
export function conventionalSampleIncrement(payload = 1) {
  return { type: SAMPLE_INCREMENT, payload };
}
