import {City} from './types/city.ts';
import {latLng} from 'leaflet';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const AppName: string = '6 cities';


export enum CityName {
  Paris = 'Paris',
  Amsterdam = 'Amsterdam',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const AllCities: City[] = [
  {
    Name: CityName.Paris,
    LatLng: latLng(48.8534, 2.3488),
    Zoom: 12
  },
  {
    Name: CityName.Cologne,
    LatLng: latLng(50.9333, 6.95),
    Zoom: 12,
  },
  {
    Name: CityName.Brussels,
    LatLng: latLng(50.8504, 4.34878),
    Zoom: 12,
  },
  {
    Name: CityName.Amsterdam,
    LatLng: latLng(52.374, 4.889969),
    Zoom: 12,
  },
  {
    Name: CityName.Hamburg,
    LatLng: latLng(53.5511, 9.9937),
    Zoom: 12,
  },
  {
    Name: CityName.Dusseldorf,
    LatLng: latLng(51.2217, 6.77616),
    Zoom: 12,
  },
];

export const DefaultCity: City = AllCities[0];

export enum SortOptions {
  Popular = 0,
  PriceLowToHigh = 1,
  PriceHighToLow = 2,
  TopRatedFirst = 3,
}

export const SortOptionTitles : Record<SortOptions, string> = {
  [SortOptions.Popular]: 'Popular',
  [SortOptions.PriceLowToHigh]: 'Price: low to high',
  [SortOptions.PriceHighToLow]: 'Price: high to low',
  [SortOptions.TopRatedFirst]: 'Top rated first',
};
