import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

import Utility from './Utility'

export default class Lightbulbs extends Component {
  render () {
    const header = <span>
      <i className='fa fa-fire' />
      &nbsp; Utilities
    </span>

    return (
      <Panel header={header}>
        <Utility utilityId='gas' name='Gas' />
        <Utility utilityId='water' name='Water' />
      </Panel>
    )
  }
}
