import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city.ts';
import {Offers} from '../types/offer.ts';
import {AuthorizationStatus} from '../consts.ts';
import {UserInfo} from '../types/user-info.ts';

export const setCity = createAction<City>('setCity');

export const setOffers = createAction<Offers>('setOffers');

export const setOfferDataLoadingStatus = createAction<boolean>('setOfferDataLoadingStatus');

export const setAuthorizationStatus = createAction<AuthorizationStatus>('setAuthorizationStatus');

export const setUserInfo = createAction<UserInfo>('setUserInfo');

export const redirectToRoute = createAction<string>('engine/redirectToRoute');
