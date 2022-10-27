/* eslint-disable no-nested-ternary */
import React from 'react';
import { Formik, Form } from 'formik';

import MovieTextInput from '../MovieTextInput';
import MovieDropdown from '../MovieDropdown';
import MovieDatePicker from '../MovieDatePicker';
import { GENRES, MOVIE_FORM_FIELDS } from '../../constants';
import './_movieForm.scss';

const MovieForm = () => (
  <Formik
    initialValues={{
      title: '',
      releaseDate: '',
      movieUrl: '',
      rating: '',
      genres: [],
      runtime: '',
      overview: ''
    }}
    // eslint-disable-next-line no-console
    onSubmit={(values) => console.log(values)}
  >
    <Form className="movieForm">
      <div className="movieForm__inputs">
        {MOVIE_FORM_FIELDS.map(({
          name, placeholder, type, as
        }) => {
          const label = name.replace(/([A-Z]+)/g, ' $1').toUpperCase();
          const isDropdown = as === 'dropdown';
          const isDatepicker = as === 'datepicker';

          return isDropdown
            ? (
              <MovieDropdown
                key={name}
                label={label}
                options={GENRES}
                placeholder={placeholder}
              />
            )
            : isDatepicker
              ? (
                <MovieDatePicker
                  className="movieForm__inputs__input calendar-icon"
                  key={name}
                  label={label}
                  name={name}
                  placeholder={placeholder}
                />
              )
              : (
                <MovieTextInput
                  key={name}
                  className="movieForm__inputs__input"
                  label={label}
                  id={name}
                  name={name}
                  type={type}
                  as={as}
                  placeholder={placeholder}
                />
              );
        })}
      </div>

      <div className="movieForm__buttons">
        <button type="button" className="button modal-button button-reset">Reset</button>
        <button type="submit" className="button modal-button">Submit</button>
      </div>
    </Form>
  </Formik>
);

export default MovieForm;
