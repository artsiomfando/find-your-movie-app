import React, { useContext } from 'react';

import Logo from '../Logo';
import MovieContext, { TMovieContext } from '../MovieContext';
import transformMovieRuntime from '../helpers/transformMovieRuntime';
import { IMovie } from '../types';
import './_movieDetails.scss';

interface Props {
  movie: IMovie
}

const MovieDetails = ({
  movie: {
    poster_path, title, vote_average, release_date, genres, runtime, overview
  }
}: Props) => {
  const processedGenres = genres.join(' & ');
  const releaseYear = release_date.slice(0, 4);
  const processedRuntime = transformMovieRuntime(runtime);

  const [, setIsMovieContext] = useContext(MovieContext) as TMovieContext;

  return (
    <div className="movieDetails">
      <div className="movieDetails__header">
        <Logo />
        <button
          type="button"
          className="movieDetails__searchButton"
          onClick={() => setIsMovieContext(0)}
        />
      </div>
      <div className="movieDetails__main">
        <div className="movieDetails__poster">
          <img src={poster_path} alt="movie poster" />
        </div>
        <div className="movieDetails__info">
          <div className="movieDetails__info__title-container">
            <span className="movieDetails__info__title">{title}</span>
            <span className="movieDetails__info__rating">{vote_average}</span>
          </div>
          <div className="movieDetails__info__genre">{processedGenres}</div>
          <div className="movieDetails__info__additional">
            <span>{releaseYear}</span>
            <span>{processedRuntime}</span>
          </div>
          <div className="movieDetails__info__overview">{overview}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
