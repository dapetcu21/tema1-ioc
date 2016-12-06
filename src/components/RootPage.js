import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import { requestWeather } from '../actions/WeatherActions'
import WeatherTemp from './WeatherTemp.js'
import WeatherHumidity from './WeatherHumidity.js'
import WeatherPressure from './WeatherPressure.js'

@connect()
export default class RootPage extends Component {
  componentWillMount () {
    this.props.dispatch(requestWeather())
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col sm={4}>
            <WeatherTemp />
          </Col>
          <Col sm={4}>
            <WeatherHumidity />
          </Col>
          <Col sm={4}>
            <WeatherPressure />
          </Col>
        </Row>
      </Grid>
    )
  }
}
