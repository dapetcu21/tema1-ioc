import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ButtonGroup, Button } from 'react-bootstrap'

import styles from './Bulb.scss'
import { getUtility, toggleUtility } from '../actions/UtilityActions'

@connect((state, props) => ({
  status: state.utilities[props.utilityId]
}))
export default class Bulb extends Component {
  componentWillMount () {
    this.props.dispatch(getUtility(this.props.utilityId))
  }

  handleToggleOn = () => {
    if (!this.props.status) {
      this.props.dispatch(toggleUtility(this.props.utilityId, true))
    }
  }

  handleToggleOff = () => {
    if (this.props.status) {
      this.props.dispatch(toggleUtility(this.props.utilityId, false))
    }
  }

  render () {
    const { status, name } = this.props

    return (
      <div className={styles.container}>
        <span className={styles.name}>{name}</span>
        <ButtonGroup className={styles.buttons}>
          <Button active={status} bsStyle={status ? 'primary' : undefined} onClick={this.handleToggleOn}>On</Button>
          <Button active={!status} bsStyle={status ? undefined : 'danger'} onClick={this.handleToggleOff}>Off</Button>
        </ButtonGroup>
      </div>
    )
  }
}
