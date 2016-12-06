import { createAction } from 'redux-actions'

import { apiGetRooms, apiToggleBulb, apiGetBulbs } from '../api'
import {
  ROOMS_REQUEST, ROOMS_RESPONSE,
  BULBS_REQUEST, BULBS_RESPONSE,
  BULB_TOGGLE_REQUEST, BULB_TOGGLE_RESPONSE
} from '../constants/ActionTypes'

export const getRooms = () => {
  return (dispatch) => {
    dispatch(createAction(ROOMS_REQUEST)())
    const promiseForCall = apiGetRooms()
    dispatch(createAction(ROOMS_RESPONSE)(promiseForCall))
  }
}

export const getBulbs = () => {
  return (dispatch) => {
    dispatch(createAction(BULBS_REQUEST)())
    const promiseForCall = apiGetBulbs()
    dispatch(createAction(BULBS_RESPONSE)(promiseForCall))
  }
}

export const toggleBulb = (bulbId, state) => {
  return (dispatch) => {
    dispatch(createAction(BULB_TOGGLE_REQUEST)())
    const promiseForCall = apiToggleBulb(bulbId, state)
    dispatch(createAction(BULB_TOGGLE_RESPONSE)(promiseForCall))
  }
}
