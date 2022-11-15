import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMovie, fetchMovies } from 'reduxStore/apiCalls';
import { selectAllMovies, selectActiveMovie } from 'reduxStore/selectors';
import { AppDispatch } from 'reduxStore/store';
import Header from '../Header';
import MovieDetails from '../MovieDetails';
import FilterGenre from '../FilterGenre';
import FilterDropdown from '../FilterDropdown';
import FilterResults from '../FilterResults';
import ErrorBoundary from '../ErrorBoundary';
import { FILTER_OPTIONS, GENRES } from '../constants';
import { TSortCategory } from '../types';
import './_filterBar.scss';

const SafeErrorComponent = ({ errorMessage }: { errorMessage: string }) => (
  <div>
    <p>Something went wrong!</p>
    <p>{errorMessage}</p>
  </div>
);

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const allMovies = useSelector(selectAllMovies);
  const activeMovie = useSelector(selectActiveMovie);
  const { searchQuery } = useParams();
  const movieSearchParams = {
    sortBy: JSON.parse(localStorage.getItem('sortCategory')!) ?? FILTER_OPTIONS[0].value,
    genre: GENRES[0].toLowerCase()
  };
  const [searchParams, setSearchParams] = useSearchParams(movieSearchParams);
  const activeGenre = searchParams.get('genre');
  const activeSortCategory = searchParams.get('sortBy');
  const activeMovieId = searchParams.get('movie');

  const onGenreItem = (genre: string) => {
    setSearchParams({
      sortBy: activeSortCategory!,
      genre,
      ...(activeMovieId && { movie: activeMovieId! })
    });
  };

  const onSortItem = (sortBy: TSortCategory) => {
    setSearchParams({
      sortBy,
      genre: activeGenre!,
      ...(activeMovieId && { movie: activeMovieId! })
    });
  };

  const onMovieItem = (id: number) => {
    setSearchParams({
      sortBy: activeSortCategory!,
      genre: activeGenre!,
      movie: `${id}`
    });
  };

  const resetActiveMovieId = () => {
    setSearchParams({
      sortBy: activeSortCategory!,
      genre: activeGenre!,
    });
  };

  useEffect(() => {
    if (activeMovieId) {
      dispatch(fetchMovie(+activeMovieId));
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    dispatch(fetchMovies({
      sortCategory: activeSortCategory!,
      genreCategory: activeGenre === GENRES[0].toLowerCase() ? '' : activeGenre as string,
      searchQuery,
      searchCategory: 'title'
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, searchParams]);

  return (
    <>
      {activeMovie ? <MovieDetails movie={activeMovie} resetId={resetActiveMovieId} /> : <Header />}
      <div className="filterBar">
        <div className="filterBar__nav">
          <FilterGenre activeGenre={activeGenre!} onGenreChange={onGenreItem} />
          <FilterDropdown activeSortCategory={activeSortCategory!} onSortChange={onSortItem} />
        </div>
        <ErrorBoundary ErrorComponent={SafeErrorComponent}>
          <FilterResults moviesList={allMovies} onMovieClick={onMovieItem} />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default SearchBar;
