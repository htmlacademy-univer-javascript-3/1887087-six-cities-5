import {PlaceType} from '../components/offers/card/place-type.ts';
import {City} from './city.ts';
import {Location} from './locatioin.ts';

export type Offer = {
  id: string;
  price: number;
  title: string;
  city: City;
  type: PlaceType;
  rating: number;
  previewImage: string;
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
};

export type Offers = Offer[];
