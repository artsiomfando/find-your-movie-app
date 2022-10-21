import React from 'react';

interface MovieItem {
  title: string,
  description: string,
}

interface Props {
  moviesList: MovieItem[],
}

const FilterResults = ({ moviesList }: Props) => {
  const filteredMoviesAmount = 0;
  const filteredMovies = moviesList.map(({ title, description }) => (
    <li key={title}>
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </li>
  ));

  return (
    <div className="filterResults">
      <div className="filterResults__amount"><span>{filteredMoviesAmount}</span> movies found</div>
      <ul>{filteredMovies}</ul>
    </div>
  );
};

export default FilterResults;
