import React from 'react';
import { useDispatch } from 'react-redux';

import Logo from '../Logo';
import { AppDispatch } from '../../redux/store';
import { resetActiveMovie } from '../../redux/movieSlice';
import transformMovieRuntime from '../helpers/transformMovieRuntime';
import { IMovie } from '../types';
import './_movieDetails.scss';

interface Props {
  movie: IMovie
  resetId: () => void
}

const MovieDetails = ({
  movie: {
    poster_path, title, vote_average, release_date, genres, runtime, overview
  }, resetId
}: Props) => {
  const processedGenres = genres.join(' & ');
  const releaseYear = release_date?.slice(0, 4);
  const processedRating = vote_average ? vote_average.toFixed(1) : null;
  const processedRuntime = runtime ? transformMovieRuntime(runtime) : null;

  const dispatch = useDispatch<AppDispatch>();

  const returnToSearch = () => {
    dispatch(resetActiveMovie());
    resetId();
  };

  return (
    <div className="movieDetails">
      <div className="movieDetails__header">
        <Logo />
        <button
          type="button"
          className="movieDetails__searchButton"
          onClick={returnToSearch}
        />
      </div>
      <div className="movieDetails__main">
        <div className="movieDetails__poster">
          <img src={poster_path} alt="movie poster" />
        </div>
        <div className="movieDetails__info">
          <div className="movieDetails__info__title-container">
            <span className="movieDetails__info__title">{title}</span>
            { vote_average ? <span className="movieDetails__info__rating">{processedRating}</span> : null }
          </div>
          <div className="movieDetails__info__genre">{processedGenres}</div>
          <div className="movieDetails__info__additional">
            <span>{releaseYear}</span>
            { runtime ? <span>{processedRuntime}</span> : null }
          </div>
          <div className="movieDetails__info__overview">{overview}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
