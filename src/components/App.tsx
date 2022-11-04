import React from 'react';
import { useSelector } from 'react-redux';

import Header from './Header';
import FilterBar from './FilterBar';
import Footer from './Footer';
import MovieDetails from './MovieDetails';
import { selectActiveMovie, selectAllMovies } from '../redux/selectors';

const App = () => {
  const allMovies = useSelector(selectAllMovies);
  const activeMovie = useSelector(selectActiveMovie);

  return (
    <>
      {activeMovie ? <MovieDetails movie={activeMovie} /> : <Header />}
      <FilterBar moviesData={allMovies} />
      <Footer />
    </>
  );
};

export default App;
