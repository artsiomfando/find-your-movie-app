import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from 'react-router-dom';

import Header from './Header';
import FilterBar from './FilterBar';
import Footer from './Footer';
import MovieDetails from './MovieDetails';
import MovieAdd from './movies/MovieAdd';
import MovieEdit from './movies/MovieEdit';
import MovieDelete from './movies/MovieDelete';
import NotFound from './NotFound';
import { selectActiveMovie, selectAllMovies } from '../redux/selectors';

const App = () => {
  const allMovies = useSelector(selectAllMovies);
  const activeMovie = useSelector(selectActiveMovie);

  return (
    <Router>
      {activeMovie ? <MovieDetails movie={activeMovie} /> : <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<FilterBar moviesData={allMovies} />} />
        <Route path="/search/:searchQuery" element={<FilterBar moviesData={allMovies} />} />
        <Route path="/movies">
          <Route path="new" element={<MovieAdd />} />
          <Route path="edit/:id" element={<MovieEdit />} />
          <Route path="delete/:id" element={<MovieDelete />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
