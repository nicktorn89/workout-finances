import React from 'react';
import Routes from './routes';
import { render } from 'react-dom';

import './theme/reset.css';

const rootEl = document.getElementById('root');

render(
  <Routes />,
  rootEl,
);
