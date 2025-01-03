
export enum OfferCardType {
  Main,
  Favorites,
  Nearby,
}

type OfferCardStyle = {
  width: number;
  height: number;
  classPrefix: string;
}

export const offerCardStyles : Record<OfferCardType, OfferCardStyle> = {
  [OfferCardType.Main]: {width: 260, height: 200, classPrefix: 'cities'},
  [OfferCardType.Favorites]: {width: 150, height: 110, classPrefix: 'favorites'},
  [OfferCardType.Nearby]: {width: 260, height: 200, classPrefix: 'nearby'},
};
