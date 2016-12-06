import { handleActions } from 'redux-actions'

import { BULBS_RESPONSE, BULB_TOGGLE_RESPONSE } from '../constants/ActionTypes'

export default handleActions({
  [BULBS_RESPONSE]: {
    next: (state, { payload }) => {
      const newState = {}
      payload.forEach(bulb => {
        newState[bulb.id] = bulb
      })
      return newState
    }
  },

  [BULB_TOGGLE_RESPONSE]: {
    next: (state, { payload }) => ({ ...state, [payload.id]: payload })
  }
}, {})
