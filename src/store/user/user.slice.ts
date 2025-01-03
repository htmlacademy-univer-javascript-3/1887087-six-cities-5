import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserState} from '../../types/state.ts';
import {AuthorizationStatus} from '../../consts.ts';
import { StoreNamespace } from '../../types/store-namespace.ts';
import { UserInfo } from '../../types/user-info.ts';
import {checkAuthorizationStatus, login, logout} from '../auth-actions.ts';
import { Offer } from '../../types/offer.ts';

const initialState: UserState = {
  AuthorizationStatus: AuthorizationStatus.Unknown,
  UserInfo: null,
  FavoriteOffers: [],
  IsLoaded: false,
};

export const userProcess = createSlice({
  name: StoreNamespace.User,
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo | null>) => {
      state.UserInfo = action.payload;
    },
    setFavoriteOffers: (state, action: PayloadAction<Offer[]>) => {
      state.FavoriteOffers = action.payload;
    },
    updateUserFavorites: (
      state,
      action: PayloadAction<{ editedOffer: Offer }>
    ) => {
      const { editedOffer } = action.payload;
      const offerIndex = state.FavoriteOffers.findIndex(
        (offer) => offer.id === editedOffer.id
      );
      if (offerIndex === -1) {
        state.FavoriteOffers.push(editedOffer);
      } else {
        state.FavoriteOffers.splice(offerIndex, 1);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthorizationStatus.fulfilled, (state) => {
        state.AuthorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthorizationStatus.rejected, (state) => {
        state.AuthorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(login.fulfilled, (state) => {
        state.AuthorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.AuthorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.AuthorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export const { setUserInfo, setFavoriteOffers, updateUserFavorites } =
  userProcess.actions;
