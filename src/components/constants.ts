import { FilterOptions, IMovieBase } from './types';

export const GENRES = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

export const CONTEXT_MENU_OPTIONS = ['edit', 'delete'];

export const FILTER_OPTIONS: FilterOptions[] = [
  { text: 'RELEASE DATE', value: 'release_date' },
  { text: 'RATING', value: 'vote_average' },
];

export const MOVIE_FORM_INITIAL_VALUES: IMovieBase = {
  title: '',
  release_date: '',
  poster_path: '',
  vote_average: '',
  genres: [],
  runtime: '',
  overview: ''
};

export const MOVIE_FORM_FIELDS = [
  {
    name: 'title',
    label: 'title',
    placeholder: 'Moana',
    type: 'text'
  },
  {
    name: 'release_date',
    label: 'release date',
    placeholder: 'Select Date',
    as: 'datepicker'
  },
  {
    name: 'poster_path',
    label: 'movie url',
    placeholder: 'https://',
    type: 'text'
  },
  {
    name: 'vote_average',
    label: 'rating',
    placeholder: '7.8',
    type: 'number'
  },
  {
    name: 'genre',
    label: 'genre',
    placeholder: 'Select Genre',
    as: 'dropdown'
  },
  {
    name: 'runtime',
    label: 'runtime',
    placeholder: 'minutes',
    type: 'number',
  },
  {
    name: 'overview',
    label: 'overview',
    placeholder: 'Movie description',
    as: 'textarea'
  }
];
