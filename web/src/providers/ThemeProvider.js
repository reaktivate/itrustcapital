/* eslint-disable */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import merge from 'lodash/merge';

import defaultTheme from '../ui/styles/defaultTheme.json';

const DefaultThemeProvider = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    {children}
  </ThemeProvider>
);


export default DefaultThemeProvider;
