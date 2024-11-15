import React from 'react';
import ReactDOM from 'react-dom/client';
import {appMocks} from './mocks/app_mocks.ts';
import {App} from './app.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App {...appMocks}/>
  </React.StrictMode>
);
