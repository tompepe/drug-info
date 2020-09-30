import React from 'react';
import ReactDOM from 'react-dom';
import { DrugInteraction } from './src/Components/DrugInteraction/DrugInteraction';
import InteractionsGetProvider from './src/Components/FetchProviders/InteractionsGet';

const mountNode = document.getElementById('app');
ReactDOM.render(
  <InteractionsGetProvider>
    <DrugInteraction />
  </InteractionsGetProvider>,

  mountNode
);
