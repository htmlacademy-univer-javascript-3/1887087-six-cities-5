import {City} from '../types/city.ts';
import {latLng} from 'leaflet';
import {CityName} from '../consts.ts';

export const amsterdam: City = {
  Name: CityName.Amsterdam,
  LatLng: latLng(52.35514938496378, 4.673877537499948),
  Zoom: 8
};

export const cologne: City = {
  Name: CityName.Cologne,
  LatLng: latLng(0, 0),
  Zoom: 10
};
