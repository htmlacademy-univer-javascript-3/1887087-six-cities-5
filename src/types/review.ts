import {Person} from './person.ts';

export type Review = {
  id: string;
  comment: string;
  rating: number;
  date: string;
  user: Person;
};

export type ReviewForm = Omit<Review, 'date' | 'user'>
