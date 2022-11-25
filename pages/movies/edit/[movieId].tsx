import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { selectAllMovies } from 'reduxStore/selectors';
import Modal from '../../../components/Modal';
import MovieForm from '../../../components/movies/MovieForm';
import { IMovie } from '../../../components/types';

const MovieEdit = () => {
  const movies = useSelector(selectAllMovies);
  const router = useRouter();
  const { movieId } = router.query;

  const chosenMovie = movies.find((movie) => movie.id === +movieId!) as IMovie;
  let movieInitialValues;

  if (chosenMovie) {
    const {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      title, release_date, poster_path, vote_average, genres, runtime, overview
    } = chosenMovie;
  
    movieInitialValues = {
      title,
      release_date,
      poster_path,
      vote_average,
      genres,
      runtime,
      overview
    };
  } else {
    movieInitialValues = {
      title: '',
      release_date: '',
      poster_path: '',
      vote_average: 0,
      genres: [],
      runtime: 0,
      overview: ''
    };
  }

  return (
    <Modal title="edit movie">
      <MovieForm movieToEdit={chosenMovie} initialValues={movieInitialValues} />
    </Modal>
  );
};

export default MovieEdit;
