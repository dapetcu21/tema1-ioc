import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import { connect } from 'react-redux'

import styles from './Weather.scss'

@connect(state => ({
  weather: state.weather
}))
export default class WeatherHumidity extends Component {
  render () {
    const { weather } = this.props
    const value = (weather && weather.main)
      ? Math.round(weather.main.humidity * 10) / 10
      : '-'

    const header = <span>
      <i className='fa fa-tint' />
      &nbsp; Humidity
    </span>

    return (
      <Panel header={header}>
        <h1 className={styles.widgetContent}>{value}%</h1>
      </Panel>
    )
  }
}
