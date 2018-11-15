/* eslint-disable */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';

import Router from './Router';
import VenueThemeProvider from './providers/ThemeProvider';
import AppContainer from 'ui/containers/App/EventsContainer';

class App extends Component {

  constructor(...args) {
    super(...args);
    const initialState = {};

    this.history = createHashHistory();
    /*const { venueId } = this.props;

    this.store = configureStore({
      initialState,
      history: this.history,
      firebase
    });

    this.store.dispatch(setVenueId(venueId));*/
  }

  componentDidMount() {
  }

  render() {
    return (
        <VenueThemeProvider>
          <AppContainer/>
        </VenueThemeProvider>
    );
  }
}

export default App;
