import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FilterGenre from '../FilterGenre';
import FilterDropdown from '../FilterDropdown';
import FilterResults from '../FilterResults';
import ErrorBoundary from '../ErrorBoundary';
import { selectSortCategory, selectfilterByGenre } from '../../redux/selectors';
import { fetchMovies } from '../../redux/apiCalls';
import { changeGenre, changeSortCategory } from '../../redux/movieSlice';
import { AppDispatch } from '../../redux/store';
import { GENRES } from '../constants';
import { IMovie, TSortCategory } from '../types';
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
  const dispatch = useDispatch<AppDispatch>();
  const sortCategory = useSelector(selectSortCategory);
  const genreCategory = useSelector(selectfilterByGenre);

  const onGenreItem = (genre: string) => {
    const formattedGenre = GENRES.slice(1).includes(genre) ? genre : null;
    dispatch(changeGenre(formattedGenre));
  };

  const onSortItem = (sortBy: TSortCategory) => {
    dispatch(changeSortCategory(sortBy));
  };

  useEffect(() => {
    dispatch(fetchMovies({ sortCategory, genreCategory }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortCategory, genreCategory]);

  return (
    <div className="filterBar">
      <div className="filterBar__nav">
        <FilterGenre onGenreChange={onGenreItem} />
        <FilterDropdown onSortChange={onSortItem} />
      </div>
      <ErrorBoundary ErrorComponent={SafeErrorComponent}>
        <FilterResults moviesList={moviesData} />
      </ErrorBoundary>
    </div>
  );
};

export default FilterBar;
