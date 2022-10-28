import React from 'react';
import { Grid } from 'semantic-ui-react';

import MovieCard from '../MovieCard';
import ContextMenu from '../ContextMenu';

interface MovieItem {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}

interface Props {
  moviesList: MovieItem[],
}

const FilterResults = ({ moviesList }: Props) => {
  const filteredMoviesAmount = moviesList.length;
  const filteredMovies = moviesList
    .map(({
      title, genres, release_date, poster_path
    }) => (
      <MovieCard
        key={title}
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
