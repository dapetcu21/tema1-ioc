import { handleActions } from 'redux-actions'

import { WEATHER_RESPONSE } from '../constants/ActionTypes'

export default handleActions({
  [WEATHER_RESPONSE]: {
    next: (state, { payload }) => payload
  }
}, {})
