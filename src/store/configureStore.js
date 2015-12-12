import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import * as reducers from '../reducers';

let createStoreWithMiddleware;

// Configure the dev tools when in DEV mode
if (__DEV__) {
  const { persistState } = require('redux-devtools');
  const DevTools = require('../components/containers/DevTools').default;
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware, promiseMiddleware),
    DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);
} else {
  createStoreWithMiddleware = applyMiddleware(thunkMiddleware, promiseMiddleware)(createStore);
}

const rootReducer = combineReducers(reducers);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = combineReducers(require('../reducers'));
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
