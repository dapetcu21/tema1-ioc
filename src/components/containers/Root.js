import React, { Component } from 'react';

import App from '../App';
import configureStore from '../../store/configureStore';

import { Provider } from 'react-redux';

const store = configureStore();

export default class Root extends Component {
  render() {
    const DevTools = __DEV__ ? require('./DevTools').default : null;

    return <Provider store={store}>
      <div>
        <App/>
        {__DEV__ ? <DevTools/> : null}
      </div>
    </Provider>;
  }
}
