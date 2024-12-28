import {Offer} from '../../../types/offer.ts';
import {SortOptions} from '../../../consts.ts';

export const OfferSortOptions =
  [SortOptions.Popular, SortOptions.PriceLowToHigh, SortOptions.PriceHighToLow, SortOptions.TopRatedFirst];

export type OfferSortCompareFnType = ((a: Offer, b: Offer) => number) | undefined;

export const OfferSortCompareFunctions: Record<SortOptions, OfferSortCompareFnType> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [SortOptions.Popular]: (_a: Offer, _b: Offer) => 0,
  [SortOptions.PriceLowToHigh]: (a: Offer, b: Offer) => a.CostPerNight - b.CostPerNight,
  [SortOptions.PriceHighToLow]: (a: Offer, b: Offer) => b.CostPerNight - a.CostPerNight,
  [SortOptions.TopRatedFirst]: (a: Offer, b: Offer)=> b.Rating - a.Rating,
};
