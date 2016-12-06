import { createAction } from 'redux-actions'

import { apiGetUtility, apiToggleUtility } from '../api'
import {
  UTILITY_REQUEST, UTILITY_RESPONSE,
  UTILITY_TOGGLE_REQUEST, UTILITY_TOGGLE_RESPONSE
} from '../constants/ActionTypes'

export const getUtility = (id) => {
  return (dispatch) => {
    dispatch(createAction(UTILITY_REQUEST)())
    const promiseForCall = apiGetUtility(id).then(state => ({ id, state }))
    dispatch(createAction(UTILITY_RESPONSE)(promiseForCall))
  }
}

export const toggleUtility = (id, newState) => {
  return (dispatch) => {
    dispatch(createAction(UTILITY_TOGGLE_REQUEST)())
    const promiseForCall = apiToggleUtility(id, newState).then(state => ({ id, state }))
    dispatch(createAction(UTILITY_TOGGLE_RESPONSE)(promiseForCall))
  }
}
