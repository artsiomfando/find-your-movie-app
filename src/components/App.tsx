import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from 'react-router-dom';

import SearchBar from './SearchBar';
import Footer from './Footer';
import MovieAdd from './movies/MovieAdd';
import MovieEdit from './movies/MovieEdit';
import MovieDelete from './movies/MovieDelete';
import NotFound from './NotFound';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/search" />} />
      <Route path="/search" element={<SearchBar />} />
      <Route path="/search/:searchQuery" element={<SearchBar />} />
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

export default App;
