import {PlaceProps} from '../components/place/place.tsx';
import {PlaceType} from '../components/place/placeType.tsx';

export const placesMocks : PlaceProps[] = [
  {
    Name: 'Beautiful & luxurious apartment at great location',
    CostPerNight: 120,
    Type: PlaceType.Apartment,
    Rating: 80,
    Image: 'img/apartment-01.jpg',
    InBookmarks: false,
    IsPremium: true,
  },
  {
    Name: 'Wood and stone place',
    CostPerNight: 80,
    Type: PlaceType.Room,
    Rating: 80,
    Image: 'img/room.jpg',
    InBookmarks: true,
    IsPremium: false,
  },
  {
    Name: 'Canal View Prinsengracht',
    CostPerNight: 132,
    Type: PlaceType.Apartment,
    Rating: 80,
    Image: 'img/apartment-02.jpg',
    InBookmarks: false,
    IsPremium: false,
  },
  {
    Name: 'Nice, cozy, warm big bed apartment',
    CostPerNight: 180,
    Type: PlaceType.Apartment,
    Rating: 100,
    Image: 'img/apartment-03.jpg',
    InBookmarks: false,
    IsPremium: true,
  },
];
