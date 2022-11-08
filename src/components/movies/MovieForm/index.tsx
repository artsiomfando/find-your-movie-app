/* eslint-disable no-nested-ternary */
import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import MovieTextInput from '../MovieTextInput';
import MovieDropdown from '../MovieDropdown';
import MovieDatePicker from '../MovieDatePicker';
import { AppDispatch } from '../../../redux/store';
import { addMovie, editMovie } from '../../../redux/apiCalls';
import movieFormSchema from '../movieFormSchema';
import { GENRES, MOVIE_FORM_FIELDS, MOVIE_FORM_INITIAL_VALUES } from '../../constants';
import './_movieForm.scss';
import { IMovie, IMovieBase } from '../../types';

interface Props {
  movieToEdit?: IMovie
  initialValues: IMovieBase
}

const MovieForm = ({ movieToEdit, initialValues = MOVIE_FORM_INITIAL_VALUES }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const onFormSubmit = (values: IMovieBase) => {
    if (movieToEdit) {
      const editedMovie = {
        ...movieToEdit,
        ...values
      };

      dispatch(editMovie(editedMovie));
    } else {
      dispatch(addMovie(values));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onFormSubmit}
      validationSchema={movieFormSchema}
    >
      <Form className="movieForm" autoComplete="off">
        <div className="movieForm__inputs">
          {MOVIE_FORM_FIELDS.map(({
            name, label, placeholder, type, as
          }) => {
            const isDropdown = as === 'dropdown';
            const isDatepicker = as === 'datepicker';

            return isDropdown
              ? (
                <MovieDropdown
                  key={name}
                  label={label.toUpperCase()}
                  options={GENRES.slice(1)}
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
};

export default MovieForm;
