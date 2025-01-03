import {AppDispatch} from '../types/state.ts';
import {State} from 'history';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Offer, Offers} from '../types/offer.ts';
import {APIRoutes} from '../consts.ts';
import {markAsFavorite, setOffers} from './offers/offers.slice.ts';
import {Review, ReviewForm} from '../types/review.ts';
import {setNearbyOffers, setReviews, setSingleOffer} from './single-offer/single-offer.slice.ts';
import {SingleOffer} from '../types/single-offer.ts';
import {setFavoriteOffers, updateUserFavorites} from './user/user.slice.ts';


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
>('fetchReviews', async ({ offerId }, { dispatch, extra: api }) => {
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
  'postReview',
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
>('fetchNearbyOffers', async ({ offerId }, { dispatch, extra: api }) => {
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
>('fetchSingleOffer', async ({ offerId }, { dispatch, extra: api }) => {
  const { data } = await api.get<SingleOffer>(`${APIRoutes.Offers}/${offerId}`);
  dispatch(fetchReviewsAction({ offerId }));
  dispatch(fetchNearbyOffersAction({ offerId }));
  dispatch(setSingleOffer({ offer: data }));
});

export const fetchFavoriteOffers = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFavoriteOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offers>(APIRoutes.Favorites);
  dispatch(setFavoriteOffers(data));
});

export const editFavorites = createAsyncThunk<
  void,
  { offerId: string; isFavoriteNow: boolean },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/editFavorites',
  async ({ offerId, isFavoriteNow }, { dispatch, extra: api }) => {
    const { data } = await api.post<Offer & SingleOffer>(
      `${APIRoutes.Favorites}/${offerId}/${isFavoriteNow ? 0 : 1}`
    );
    dispatch(updateUserFavorites({ editedOffer: data }));
    dispatch(markAsFavorite(data.id));
  }
);
