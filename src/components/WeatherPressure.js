import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import { connect } from 'react-redux'

import styles from './Weather.scss'

@connect(state => ({
  weather: state.weather
}))
export default class WeatherPressure extends Component {
  render () {
    const { weather } = this.props
    const value = (weather && weather.main)
      ? Math.round((weather.main.grnd_level || weather.main.pressure) * 10) / 10
      : '-'

    return (
      <Panel header='Air pressure'>
        <h1 className={styles.widgetContent}>{value} hPa</h1>
      </Panel>
    )
  }
}
