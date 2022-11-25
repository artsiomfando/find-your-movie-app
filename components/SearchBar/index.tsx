import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
import { IMovie, TSortCategory } from '../types';
import styles from './_filterBar.module.scss';

interface Props {
  movies: IMovie[]
}

interface IMovieSearcParams {
  sortBy: string,
  genre: string,
  movie?: string | string[]
}

const SafeErrorComponent = ({ errorMessage }: { errorMessage: string }) => (
  <div>
    <p>Something went wrong!</p>
    <p>{errorMessage}</p>
  </div>
);

const SearchBar = ({ movies }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const allMovies = useSelector(selectAllMovies);
  const activeMovie = useSelector(selectActiveMovie);
  const router = useRouter();
  const { movieId, searchQuery } = router.query;

  let defaultSortBy;
  if (typeof window !== 'undefined') {
    defaultSortBy = JSON.parse(localStorage.getItem('sortCategory')!);
  }

  const movieSearchParams = {
    sortBy: defaultSortBy ?? FILTER_OPTIONS[0].value,
    genre: GENRES[0].toLowerCase(),
  };
  const [searchParams, setSearchParams] = useState<IMovieSearcParams>(movieSearchParams);
  const activeGenre = searchParams.genre;
  const activeSortCategory = searchParams.sortBy;
  const activeMovieId = movieId;

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

    router.push(`/movies/${id}`);
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
      sortCategory: activeSortCategory! as string,
      genreCategory: activeGenre === GENRES[0].toLowerCase() ? '' : activeGenre as string,
      searchQuery: searchQuery as string,
      searchCategory: 'title'
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId, searchQuery, searchParams]);

  return (
    <>
      {activeMovie ? <MovieDetails movie={activeMovie} resetId={resetActiveMovieId} /> : <Header />}
      <div className={styles.filterBar}>
        <div className={styles.filterBar__nav}>
          <FilterGenre activeGenre={activeGenre!} onGenreChange={onGenreItem} />
          <FilterDropdown activeSortCategory={activeSortCategory!} onSortChange={onSortItem} />
        </div>
        <ErrorBoundary ErrorComponent={SafeErrorComponent}>
          <FilterResults moviesList={movies} onMovieClick={onMovieItem} />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default SearchBar;
