import React, { useState } from 'react';

import FilterGenre from '../FilterGenre';
import FilterDropdown from '../FilterDropdown';
import FilterResults from '../FilterResults';
import ErrorBoundary from '../ErrorBoundary';
import { FILTER_OPTIONS, GENRES } from '../constants';
import { TSortCategory, IMovie } from '../types';
import './_filterBar.scss';

interface Props {
  moviesData: IMovie[]
}

const SafeErrorComponent = ({ errorMessage }: { errorMessage: string }) => (
  <div>
    <p>Something went wrong!</p>
    <p>{errorMessage}</p>
  </div>
);

const FilterBar = ({ moviesData }: Props) => {
  const [{ value: releaseDate }, { value: rating }] = FILTER_OPTIONS;
  const [filteredData, setFilteredData] = useState(moviesData);
  const [sortCategory, setSortCategory] = useState<TSortCategory>(releaseDate);

  const onSortItem = (sortBy: TSortCategory, data = [...filteredData]) => {
    setSortCategory(sortBy);

    if (sortBy === releaseDate) {
      setFilteredData(
        data.sort(
          (a, b) => new Date(b[sortBy] as string).getTime()
                  - new Date(a[sortBy] as string).getTime()
        )
      );
    }

    if (sortBy === rating) {
      setFilteredData(
        data.sort((a, b) => +b[sortBy] - +a[sortBy])
      );
    }
  };

  const onGenreItem = (genre: string) => {
    if (genre === GENRES[0]) {
      onSortItem(sortCategory, moviesData);
    } else {
      const dataByGenre = moviesData.filter((movie) => movie.genres.includes(genre));
      onSortItem(sortCategory, dataByGenre);
    }
  };

  return (
    <div className="filterBar">
      <div className="filterBar__nav">
        <FilterGenre onGenreChange={onGenreItem} />
        <FilterDropdown onSortChange={onSortItem} />
      </div>
      <ErrorBoundary ErrorComponent={SafeErrorComponent}>
        <FilterResults moviesList={filteredData} />
      </ErrorBoundary>
    </div>
  );
};

export default FilterBar;
