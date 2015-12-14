import React, { Component } from 'react';
import { Router, Route } from 'react-router';

import NavBarPage from './NavBarPage';
import CounterButtonPage from './CounterButtonPage';
import HelloWorldPage from './HelloWorldPage';
import NotFoundPage from './NotFoundPage';

export default class Routes extends Component {
  render() {
    return <Router>
      <Route component={NavBarPage}>
        <Route path='/'>
          <Route path='counter' component={CounterButtonPage}/>
          <Route path='hello' component={HelloWorldPage}/>
        </Route>
        <Route path='*' component={NotFoundPage}/>
      </Route>
    </Router>;
  }
}
