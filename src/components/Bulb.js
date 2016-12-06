import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ButtonGroup, Button } from 'react-bootstrap'

import styles from './Bulb.scss'
import { toggleBulb } from '../actions/BulbActions'

@connect(state => ({
  rooms: state.rooms
}))
export default class Bulb extends Component {
  handleToggleOn = () => {
    if (!this.props.bulb.status) {
      this.props.dispatch(toggleBulb(this.props.bulb.id, true))
    }
  }

  handleToggleOff = () => {
    if (this.props.bulb.status) {
      this.props.dispatch(toggleBulb(this.props.bulb.id, false))
    }
  }

  render () {
    const { bulb, rooms } = this.props

    const name = `Light ${bulb.id}` + (rooms[bulb.room_id] ? ' - ' + rooms[bulb.room_id].name : '')
    const status = bulb.status

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
