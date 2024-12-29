import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city.ts';
import {Offers} from '../types/offer.ts';

export const changeCity = createAction<City>('changeCity');

export const setOffers = createAction<Offers>('setOffers');

export const setOfferDataLoadingStatus = createAction<boolean>('data/setQuestionsDataLoadingStatus');

