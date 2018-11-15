/* eslint-disable */
import React, { Component } from 'react';
import { Route, Switch, Redirect, Router } from 'react-router';
import AppContainer from 'ui/containers/App/EventsContainer';

function Routes() {
  return (
    <Router>
      <Route path="/" component={AppContainer} />
    </Router>
  )
};


export default Routes;
