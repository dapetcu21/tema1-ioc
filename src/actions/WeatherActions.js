import { createAction } from 'redux-actions'

import { getWeather } from '../api'
import { WEATHER_REQUEST, WEATHER_RESPONSE } from '../constants/ActionTypes'

export const requestWeather = () => {
  return (dispatch) => {
    dispatch(createAction(WEATHER_REQUEST)())
    const promiseForCall = getWeather()
    dispatch(createAction(WEATHER_RESPONSE)(promiseForCall))
  }
}
