import WebFont from 'webfontloader';
import 'normalize.css';
import './ui/styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Montserrat:400,600,700', 'Lora:400,600,700', 'sans-serif']
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker();
