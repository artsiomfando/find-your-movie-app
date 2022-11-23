import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectAllMovies } from 'reduxStore/selectors';
import Modal from '../../Modal';
import MovieForm from '../MovieForm';
import { IMovie } from '../../types';

const MovieEdit = () => {
  const movies = useSelector(selectAllMovies);
  const { id } = useParams();

  const chosenMovie = movies.find((movie) => movie.id === +id!) as IMovie;

  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    title, release_date, poster_path, vote_average, genres, runtime, overview
  } = chosenMovie;

  const movieInitialValues = {
    title,
    release_date,
    poster_path,
    vote_average,
    genres,
    runtime,
    overview
  };

  return (
    <Modal title="edit movie">
      <MovieForm movieToEdit={chosenMovie} initialValues={movieInitialValues} />
    </Modal>
  );
};

export default MovieEdit;
