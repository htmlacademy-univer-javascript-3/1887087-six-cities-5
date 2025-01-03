import {createAsyncThunk} from '@reduxjs/toolkit';
import {AuthRequest} from '../types/auth-request.ts';
import {AppDispatch} from '../types/state.ts';
import {State} from 'history';
import {AxiosInstance} from 'axios';
import {UserInfo} from '../types/user-info.ts';
import {APIRoutes, AppRoute, DefaultCity} from '../consts.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {redirectToRoute} from './actions.ts';
import {setUserInfo} from './user/user.slice.ts';
import {setCity} from './offers/offers.slice.ts';

export const checkAuthorizationStatus = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('checkAuthorizationStatus', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<UserInfo>(APIRoutes.Login);
  dispatch(setUserInfo(data));
});

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
    dispatch(redirectToRoute(AppRoute.Main));
    dispatch(checkAuthorizationStatus());
  }
);

export const logout = createAsyncThunk<
    void,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>(
  'logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dispatch(setUserInfo(null));
    dispatch(setCity(DefaultCity));
    dispatch(redirectToRoute(AppRoute.Main));
  });
