import {City} from '../types/city.ts';
import {latLng} from 'leaflet';

export const amsterdam: City = {
  Name: 'Amsterdam',
  LatLng: latLng(52.377956, 4.897070),
  Zoom: 10
};

export const cologne: City = {
  Name: 'Cologne',
  LatLng: latLng(0, 0),
  Zoom: 10
};
