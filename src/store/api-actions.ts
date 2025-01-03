import {AppDispatch} from '../types/state.ts';
import {State} from 'history';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Offers} from '../types/offer.ts';
import {APIRoutes} from '../consts.ts';
import {setOffers} from './offers/offers-reducer.ts';
import {Review, ReviewForm} from '../types/review.ts';
import {setNearbyOffers, setReviews, setSingleOffer} from './single-offer/single-offer-reducer.ts';
import {SingleOffer} from '../types/single-offer.ts';


export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const {data} = await api.get<Offers>(APIRoutes.Offers);
    dispatch(setOffers(data));
  }
);

export const fetchReviewsAction = createAsyncThunk<
  void,
  { offerId: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchReviews', async ({ offerId }, { dispatch, extra: api }) => {
  const { data } = await api.get<Review[]>(`${APIRoutes.Comments}/${offerId}`);
  dispatch(setReviews({ reviews: data }));
});

export const postReviewAction = createAsyncThunk<
  void,
  ReviewForm,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'review/postReview',
  async ({ comment, rating, id }, { dispatch, extra: api }) => {
    await api.post(`${APIRoutes.Comments}/${id}`, {
      comment,
      rating: Number(rating),
    });
    dispatch(fetchReviewsAction({ offerId: id }));
  }
);

export const fetchNearbyOffersAction = createAsyncThunk<
  void,
  { offerId: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchNearbyOffers', async ({ offerId }, { dispatch, extra: api }) => {
  const { data } = await api.get<Offers>(
    `${APIRoutes.Offers}/${offerId}/nearby`
  );
  dispatch(setNearbyOffers({ nearbyOffers: data.slice(0, 3) }));
});

export const fetchSingleOffer = createAsyncThunk<
  void,
  { offerId: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchSingleOffer', async ({ offerId }, { dispatch, extra: api }) => {
  const { data } = await api.get<SingleOffer>(`${APIRoutes.Offers}/${offerId}`);
  dispatch(fetchReviewsAction({ offerId }));
  dispatch(fetchNearbyOffersAction({ offerId }));
  dispatch(setSingleOffer({ offer: data }));
});
