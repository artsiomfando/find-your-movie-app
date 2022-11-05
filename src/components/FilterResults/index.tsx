import React from 'react';
import { Grid } from 'semantic-ui-react';

import MovieCard from '../MovieCard';
import ContextMenu from '../ContextMenu';
import { IMovie } from '../types';

interface Props {
  moviesList: IMovie[],
}

const FilterResults = ({ moviesList }: Props) => {
  const filteredMoviesAmount = moviesList.length;
  const filteredMovies = moviesList
    .map(({
      id, title, genres, release_date, poster_path
    }) => (
      <MovieCard
        key={id}
        id={id}
        poster={poster_path}
        title={title}
        releaseDate={release_date}
        genres={genres}
      />
    ));

  return (
    <div className="filterResults">
      <div className="filterResults__amount"><span>{filteredMoviesAmount}</span> movies found</div>
      <Grid centered>{filteredMovies}</Grid>
      <ContextMenu />
    </div>
  );
};

export default FilterResults;
