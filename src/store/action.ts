import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city.ts';

export const changeCity = createAction<City>('changeCity');

export const loadOffers = createAction('loadOffers');
