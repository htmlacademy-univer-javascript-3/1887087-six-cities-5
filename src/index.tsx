import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app.tsx';
import {store} from './store';
import {fetchOffers} from './store/api-actions.ts';
import {Provider} from 'react-redux';

store.dispatch(fetchOffers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
