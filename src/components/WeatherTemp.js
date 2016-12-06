import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import { connect } from 'react-redux'

import styles from './Weather.scss'

@connect(state => ({
  weather: state.weather
}))
export default class WeatherTemp extends Component {
  render () {
    const { weather } = this.props
    const value = (weather && weather.main)
      ? Math.round((weather.main.temp - 273.15) * 10) / 10
      : '-'

    const header = <span>
      <i className='fa fa-thermometer-full' />
      &nbsp; Temperature outside
    </span>

    return (
      <Panel header={header}>
        <h1 className={styles.widgetContent}>{value} ˚C</h1>
      </Panel>
    )
  }
}
