import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sampleIncrement } from '../actions/SampleActions';

@connect(state => ({
  counter: state.sampleCounter,
}))
export default class App extends Component {
  buttonClicked = () => {
    this.props.dispatch(sampleIncrement());
  }

  render() {
    const { counter } = this.props;

    return <div>
      <div>Hello world!</div>
      <button onClick={this.buttonClicked}>This button has been pressed {counter} times</button>
    </div>;
  }
}