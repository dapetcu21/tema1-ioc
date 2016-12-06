import { handleActions } from 'redux-actions'

import { ROOMS_RESPONSE } from '../constants/ActionTypes'

export default handleActions({
  [ROOMS_RESPONSE]: {
    next: (state, { payload }) => payload
  }
}, {})
