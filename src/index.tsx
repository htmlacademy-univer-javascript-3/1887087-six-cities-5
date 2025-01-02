import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app.tsx';
import {store} from './store';
import {fetchOffers} from './store/api-actions.ts';
import {Provider} from 'react-redux';
import {checkAuthorizationStatus} from './store/auth-actions.ts';
import {ToastContainer} from 'react-toastify';

store.dispatch(fetchOffers());
store.dispatch(checkAuthorizationStatus());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
