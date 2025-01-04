
export enum BookmarkStyle {
  Offer,
  OfferCard,
}

type BookmarkStyleFields = {
  width: number;
  height: number;
  classPrefix: string;
}

export const bookmarkStyles : Record<BookmarkStyle, BookmarkStyleFields> = {
  [BookmarkStyle.OfferCard]: {width: 18, height: 19, classPrefix: 'place-card'},
  [BookmarkStyle.Offer]: {width: 31, height: 33, classPrefix: 'offer'},
};
