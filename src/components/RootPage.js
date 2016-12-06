import React, { Component } from 'react'
import { Grid, Row, Col, Panel } from 'react-bootstrap'
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

  renderHousePlan () {
    const header = (
      <span>
        <i className='fa fa-map' />
        &nbsp; House plan
      </span>
    )

    return (
      <Panel header={header}>
        <img src={require('./house_plan.jpg')} style={{ width: '100%' }} />
      </Panel>
    )
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
        <Row>
          <Col xs={12}>{this.renderHousePlan()}</Col>
        </Row>
      </Grid>
    )
  }
}
