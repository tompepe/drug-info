import React from 'react';
import ReactDOM from 'react-dom';
import { HelloPrototype } from './src/Components/HelloPrototype/HelloPrototype';

const mountNode = document.getElementById('app');
ReactDOM.render(
  <HelloPrototype />,
  mountNode
);
