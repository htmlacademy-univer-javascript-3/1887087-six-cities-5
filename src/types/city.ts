import {LatLng} from 'leaflet';
import {CityName} from '../consts.ts';


export type City = {
  Name: CityName;
  LatLng: LatLng;
  Zoom: number;
}
