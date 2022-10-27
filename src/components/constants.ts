export const GENRES = ['documentary', 'comedy', 'horror', 'crime'];

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
