import {AppProps} from '../app.tsx';
import {placesMocks} from './places_mocks.ts';

export const appMocks : AppProps = {
  MainProps:
    {
      Places: placesMocks,
      PlacesCount: 312,
    },
};
