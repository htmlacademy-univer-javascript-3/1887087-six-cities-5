import {createAsyncThunk} from '@reduxjs/toolkit';
import {AuthRequest} from '../types/auth-request.ts';
import {AppDispatch} from '../types/state.ts';
import {State} from 'history';
import {AxiosInstance} from 'axios';
import {UserInfo} from '../types/user-info.ts';
import {APIRoutes, AppRoute, AuthorizationStatus} from '../consts.ts';
import {saveToken} from '../services/token.ts';
import {redirectToRoute, setAuthorizationStatus, setUserInfo} from './actions.ts';

export const login = createAsyncThunk<void, AuthRequest, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async (payload, { dispatch, extra: api }) => {
    const {data} = await api.post<UserInfo>(APIRoutes.Login, payload);
    saveToken(data.token);
    dispatch(setUserInfo(data));
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const checkAuthorizationStatus = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuthorizationStatus',
  async (payload, { dispatch, extra: api }) => {
    const {data} = await api.post<UserInfo>(APIRoutes.Login, payload);
    dispatch(setUserInfo(data));
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  }
);
