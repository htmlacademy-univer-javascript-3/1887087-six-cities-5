import {City} from './types/city.ts';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer:id',
}

export enum APIRoutes {
  Offers = '/offers',
  Favorites = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
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
    name: CityName.Paris,
    location: {
      latitude: 48.8534,
      longitude: 2.3488,
      zoom: 12,
    },
  },
  {
    name: CityName.Cologne,
    location: {
      latitude: 50.9333,
      longitude: 6.95,
      zoom: 12,
    },
  },
  {
    name: CityName.Brussels,
    location: {
      latitude: 50.8504,
      longitude: 4.34878,
      zoom: 12,
    },
  },
  {
    name: CityName.Amsterdam,
    location: {
      latitude: 52.374,
      longitude: 4.889969,
      zoom: 12,
    },
  },
  {
    name: CityName.Hamburg,
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 12,
    },
  },
  {
    name: CityName.Dusseldorf,
    location: {
      latitude: 51.2217,
      longitude: 6.77616,
      zoom: 12,
    },
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
