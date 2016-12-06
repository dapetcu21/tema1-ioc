import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap'

import { getBulbs, getRooms } from '../actions/BulbActions'
import Bulb from './Bulb'

@connect(state => ({
  bulbs: state.bulbs
}))
export default class Lightbulbs extends Component {
  componentWillMount () {
    this.props.dispatch(getBulbs())
    this.props.dispatch(getRooms())
  }

  render () {
    const { bulbs } = this.props
    const header = <span>
      <i className='fa fa-lightbulb-o' />
      &nbsp; Lights
    </span>
    return (
      <Panel header={header}>
        {Object.keys(bulbs).map(id =>
          <Bulb key={id} bulb={bulbs[id]} />
        )}
      </Panel>
    )
  }
}
