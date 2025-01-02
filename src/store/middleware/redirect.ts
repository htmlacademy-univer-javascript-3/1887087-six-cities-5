import browserHistory from '../../browser-history.ts';
import {Middleware, PayloadAction} from '@reduxjs/toolkit';
import {reducer} from '../reducer.ts';

type Reducer = ReturnType<typeof reducer>;

export const redirectMiddleware: Middleware<unknown, Reducer> =
  () => (next) => (action: PayloadAction<string>) => {
    if (action.type === 'engine/redirectToRoute') {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
