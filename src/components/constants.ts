import { FilterOptions } from './types';

export const GENRES = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

export const CONTEXT_MENU_OPTIONS = ['edit', 'delete'];

export const FILTER_OPTIONS: FilterOptions[] = [
  { text: 'RELEASE DATE', value: 'release_date' },
  { text: 'RATING', value: 'vote_average' },
];

export const MOVIE_FORM_FIELDS = [
  {
    name: 'title',
    placeholder: 'Moana',
    type: 'text'
  },
  {
    name: 'releaseDate',
    placeholder: 'Select Date',
    as: 'datepicker'
  },
  {
    name: 'movieUrl',
    placeholder: 'https://',
    type: 'text'
  },
  {
    name: 'rating',
    placeholder: '7.8',
    type: 'text'
  },
  {
    name: 'genre',
    placeholder: 'Select Genre',
    as: 'dropdown'
  },
  {
    name: 'runtime',
    placeholder: 'minutes',
    type: 'text',
  },
  {
    name: 'overview',
    placeholder: 'Movie description',
    as: 'textarea'
  }
];
