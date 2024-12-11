import {PlaceType} from '../components/offers/card/place-type.ts';
import {LatLng} from 'leaflet';
import {City} from './city.ts';

export type Offer = {
  // eslint-disable-next-line react/no-unused-prop-types
  Id: string;
  CostPerNight: number;
  Name: string;
  // eslint-disable-next-line react/no-unused-prop-types
  City: City;
  Type: PlaceType;
  Rating: number;
  Image: string;
  InBookmarks: boolean;
  IsPremium: boolean;
  LatLng: LatLng;
};

export type Offers = Offer[];
