import { createAction } from 'redux-actions'

import { apiGetWeather } from '../api'
import { WEATHER_REQUEST, WEATHER_RESPONSE } from '../constants/ActionTypes'

export const getWeather = () => {
  return (dispatch) => {
    dispatch(createAction(WEATHER_REQUEST)())
    const promiseForCall = apiGetWeather()
    dispatch(createAction(WEATHER_RESPONSE)(promiseForCall))
  }
}
