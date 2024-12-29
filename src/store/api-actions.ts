import {AppDispatch} from '../types/state.ts';
import {State} from 'history';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Offers} from '../types/offer.ts';
import {APIRoutes} from '../consts.ts';
import {setOfferDataLoadingStatus, setOffers} from './actions.ts';


export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOfferDataLoadingStatus(false));
    const {data} = await api.get<Offers>(APIRoutes.Offers);
    dispatch(setOfferDataLoadingStatus(true));

    dispatch(setOffers(data));
  }
);
