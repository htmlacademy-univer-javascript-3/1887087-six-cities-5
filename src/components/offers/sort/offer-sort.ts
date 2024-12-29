import {Offer} from '../../../types/offer.ts';
import {SortOptions} from '../../../consts.ts';

export const OfferSortOptions =
  [SortOptions.Popular, SortOptions.PriceLowToHigh, SortOptions.PriceHighToLow, SortOptions.TopRatedFirst];

export type OfferSortCompareFnType = ((a: Offer, b: Offer) => number) | undefined;

export const OfferSortCompareFunctions: Record<SortOptions, OfferSortCompareFnType> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [SortOptions.Popular]: (_a: Offer, _b: Offer) => 0,
  [SortOptions.PriceLowToHigh]: (a: Offer, b: Offer) => a.price - b.price,
  [SortOptions.PriceHighToLow]: (a: Offer, b: Offer) => b.price - a.price,
  [SortOptions.TopRatedFirst]: (a: Offer, b: Offer)=> b.rating - a.rating,
};
