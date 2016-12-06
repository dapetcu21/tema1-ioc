import { handleActions } from 'redux-actions'

import { UTILITY_RESPONSE, UTILITY_TOGGLE_RESPONSE } from '../constants/ActionTypes'

export default handleActions({
  [UTILITY_TOGGLE_RESPONSE]: {
    next: (state, { payload }) => ({ ...state, [payload.id]: payload.state })
  },

  [UTILITY_RESPONSE]: {
    next: (state, { payload }) => ({ ...state, [payload.id]: payload.state })
  }
}, { water: true, gas: true })
