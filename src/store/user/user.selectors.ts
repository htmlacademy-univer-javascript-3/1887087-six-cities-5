import { AuthorizationStatus } from '../../consts';
import { StoreNamespace } from '../../types/store-namespace';
import { State } from '../hooks';
import {UserInfo} from '../../types/user-info.ts';
import {Offers} from '../../types/offer.ts';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[StoreNamespace.User].AuthorizationStatus;
export const getUserInfo = (state: State): UserInfo | null =>
  state[StoreNamespace.User].UserInfo;
export const getFavoriteOffers = (state: State): Offers =>
  state[StoreNamespace.User].FavoriteOffers;
