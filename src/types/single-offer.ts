import { Offer } from './offer';
import {Person} from './person.ts';

export type SingleOffer = Omit<Offer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Person;
  images: string[];
  maxAdults: number;
};
