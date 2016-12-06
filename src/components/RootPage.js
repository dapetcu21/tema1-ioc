import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import { getWeather } from '../actions/WeatherActions'
import WeatherTemp from './WeatherTemp'
import WeatherHumidity from './WeatherHumidity'
import WeatherPressure from './WeatherPressure'
import Lights from './Lights'
import Utilities from './Utilities'

@connect()
export default class RootPage extends Component {
  componentWillMount () {
    this.props.dispatch(getWeather())
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
        <Row>
          <Col xs={12}><Utilities /></Col>
        </Row>
        <Row>
          <Col xs={12}><Lights /></Col>
        </Row>
      </Grid>
    )
  }
}
