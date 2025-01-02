import { createApi } from '../services/api.ts';
import {reducer} from './reducer.ts';
import {configureStore} from '@reduxjs/toolkit';
import {redirectMiddleware} from './middleware/redirect.ts';

export const api = createApi();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirectMiddleware),
});
