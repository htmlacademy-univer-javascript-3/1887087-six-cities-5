import {SingleOfferState} from '../../types/state.ts';
import { StoreNamespace } from '../../types/store-namespace.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Offers} from '../../types/offer.ts';
import {SingleOffer} from '../../types/single-offer.ts';
import {Review} from '../../types/review.ts';
import {fetchNearbyOffersAction, fetchReviewsAction, fetchSingleOffer, postReviewAction} from '../api-actions.ts';
import {ReviewStatus} from '../../types/review-status.ts';

const initialState: SingleOfferState = {
  IsLoaded: false,
  NearbyOffers: [],
  Offer: null,
  Reviews: [],
  ReviewStatus: ReviewStatus.None,
};

export const singleOfferProcess = createSlice({
  name: StoreNamespace.SingleOffer,
  initialState,
  reducers: {
    setSingleOffer: (state, action: PayloadAction<{ offer: SingleOffer }>) => {
      state.Offer = action.payload.offer;
    },
    setNearbyOffers: (
      state,
      action: PayloadAction<{ nearbyOffers: Offers }>
    ) => {
      state.NearbyOffers = action.payload.nearbyOffers;
    },
    setReviews: (
      state,
      action: PayloadAction<{ reviews: Review[] }>
    ) => {
      state.Reviews = action.payload.reviews;
    },
    updateSingleOfferFavoritesStatus: (state) => {
      if (state.Offer !== null) {
        state.Offer.isFavorite = !state.Offer?.isFavorite;
      }
    },
    addReview: (state, action: PayloadAction<Review>) => {
      state.Reviews.push(action.payload);
    },
    setReviewStatus: (state, action: PayloadAction<ReviewStatus>) => {
      state.ReviewStatus = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state) => {
        state.IsLoaded = true;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.IsLoaded = true;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.IsLoaded = false;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state) => {
        state.IsLoaded = true;
      })
      .addCase(fetchNearbyOffersAction.rejected, (state) => {
        state.IsLoaded = true;
      })
      .addCase(fetchNearbyOffersAction.pending, (state) => {
        state.IsLoaded = false;
      })
      .addCase(fetchSingleOffer.fulfilled, (state) => {
        state.IsLoaded = true;
      })
      .addCase(fetchSingleOffer.rejected, (state) => {
        state.IsLoaded = true;
      })
      .addCase(fetchSingleOffer.pending, (state) => {
        state.IsLoaded = false;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.ReviewStatus = ReviewStatus.PostPending;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.ReviewStatus = ReviewStatus.Rejected;
      })
      .addCase(postReviewAction.fulfilled, (state) => {
        state.ReviewStatus = ReviewStatus.Posted;
      });
  },
});

export const {
  setSingleOffer,
  setNearbyOffers,
  setReviews,
  updateSingleOfferFavoritesStatus,
  addReview,
  setReviewStatus
} = singleOfferProcess.actions;
