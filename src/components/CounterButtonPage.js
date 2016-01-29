import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sampleIncrement } from '../actions/SampleActions';

import classes from './CounterButtonPage.scss';

@connect(state => ({
  counter: state.sampleCounter,
}))
export default class CounterButton extends Component {

  buttonClicked = () => {
    this.props.dispatch(sampleIncrement());
  };

  render() {
    const { counter } = this.props;

    return <div>
      <button
        className={classes.button}
        onClick={this.buttonClicked}
      >
        This button has been pressed {counter} times
      </button>
    </div>;
  }
}
