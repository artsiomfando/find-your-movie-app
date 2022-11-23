import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
// import { useParams } from 'react-router-dom';

import { selectAllMovies } from 'reduxStore/selectors';
import Modal from '../../../components/Modal';
import MovieForm from '../../../components/movies/MovieForm';
import { IMovie } from '../../../components/types';

const MovieEdit = () => {
  const movies = useSelector(selectAllMovies);
  const router = useRouter();
  const { movieId } = router.query;
  // const { id } = useParams();

  const chosenMovie = movies.find((movie) => movie.id === +movieId!) as IMovie;

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
