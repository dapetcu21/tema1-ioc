import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

import styles from './NavBarPage.scss'

export default class NavBarPage extends Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  render () {
    return (
      <div className={styles.container}>
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <i className='fa fa-home' />
              &nbsp; Smart Home
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
