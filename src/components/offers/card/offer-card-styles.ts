
export enum OfferCardType {
  MainPage,
  FavoritesPage,
}

type OfferCardStyle = {
  width: number;
  height: number;
  classPrefix: string;
}

export const offerCardStyles : Record<OfferCardType, OfferCardStyle> = {
  [OfferCardType.MainPage]: {width: 260, height: 200, classPrefix: 'cities'},
  [OfferCardType.FavoritesPage]: {width: 150, height: 110, classPrefix: 'favorites'},
};
