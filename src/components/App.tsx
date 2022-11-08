import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import FilterBar from './FilterBar';
import Footer from './Footer';
import MovieDetails from './MovieDetails';
import MovieAdd from './movies/MovieAdd';
import MovieEdit from './movies/MovieEdit';
import MovieDelete from './movies/MovieDelete';
import { selectActiveMovie, selectAllMovies } from '../redux/selectors';

const App = () => {
  const allMovies = useSelector(selectAllMovies);
  const activeMovie = useSelector(selectActiveMovie);

  return (
    <Router>
      {activeMovie ? <MovieDetails movie={activeMovie} /> : <Header />}
      <Routes>
        <Route path="/" element={<FilterBar moviesData={allMovies} />} />
        <Route path="/movies/new" element={<MovieAdd />} />
        <Route path="/movies/edit/:id" element={<MovieEdit />} />
        <Route path="/movies/delete/:id" element={<MovieDelete />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
