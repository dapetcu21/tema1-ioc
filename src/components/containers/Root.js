import React, { Component } from 'react';

import Routes from '../Routes';
import configureStore from '../../store/configureStore';

import { Provider } from 'react-redux';

const store = configureStore();

export default class Root extends Component {
  render() {
    const DevTools = __DEV__ ? require('./DevTools').default : null;

    return <Provider store={store}>
      <div className='__rootAppContainer'>
        <Routes/>
        {__DEV__ ? <DevTools/> : null}
      </div>
    </Provider>;
  }
}
