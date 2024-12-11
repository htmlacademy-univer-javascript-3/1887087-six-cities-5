import {PlaceType} from '../components/offers/card/place-type.ts';
import {latLng} from 'leaflet';
import {Offer} from '../types/offer.ts';
import {amsterdam, cologne} from './cities.ts';

export const offerProps : Offer[] = [
  {
    Id: '1',
    Name: 'Beautiful & luxurious apartment at great location',
    City: amsterdam,
    CostPerNight: 120,
    Type: PlaceType.Apartment,
    Rating: 80,
    Image: 'img/apartment-01.jpg',
    InBookmarks: true,
    IsPremium: true,
    LatLng: latLng(52.3909553943508, 4.85309666406198)
  },
  {
    Id: '2',
    Name: 'Wood and stone offers',
    City: amsterdam,
    CostPerNight: 80,
    Type: PlaceType.Room,
    Rating: 80,
    Image: 'img/room.jpg',
    InBookmarks: true,
    IsPremium: false,
    LatLng: latLng(52.3609553943508, 4.85309666406198)
  },
  {
    Id: '3',
    Name: 'Canal View Prinsengracht',
    City: amsterdam,
    CostPerNight: 132,
    Type: PlaceType.Apartment,
    Rating: 80,
    Image: 'img/apartment-02.jpg',
    InBookmarks: false,
    IsPremium: false,
    LatLng: latLng(52.3909553943508, 4.929309666406198)
  },
  {
    Id: '4',
    Name: 'Nice, cozy, warm big bed apartment',
    City: amsterdam,
    CostPerNight: 180,
    Type: PlaceType.Apartment,
    Rating: 100,
    Image: 'img/apartment-03.jpg',
    InBookmarks: false,
    IsPremium: true,
    LatLng: latLng(52.3809553943508, 4.939309666406198)
  },
  {
    Id: '5',
    Name: 'White castle',
    City: cologne,
    CostPerNight: 180,
    Type: PlaceType.Apartment,
    Rating: 100,
    Image: 'img/apartment-03.jpg',
    InBookmarks: true,
    IsPremium: false,
    LatLng: latLng(52.3809553943508, 4.919309666406198)
  },
];
