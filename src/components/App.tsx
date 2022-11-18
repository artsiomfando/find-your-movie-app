import React, { Suspense } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from 'react-router-dom';

import SearchBar from './SearchBar';
import Footer from './Footer';
import NotFound from './NotFound';

const MovieAdd = React.lazy(() => import('./movies/MovieAdd'));
const MovieEdit = React.lazy(() => import('./movies/MovieEdit'));
const MovieDelete = React.lazy(() => import('./movies/MovieDelete'));

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/search" />} />
      <Route path="/search" element={<SearchBar />} />
      <Route path="/search/:searchQuery" element={<SearchBar />} />
      <Route path="/movies">
        <Route
          path="new"
          element={(
            <Suspense fallback="Loading...">
              <MovieAdd />
            </Suspense>
        )}
        />
        <Route
          path="edit/:id"
          element={(
            <Suspense fallback="Loading...">
              <MovieEdit />
            </Suspense>
        )}
        />
        <Route
          path="delete/:id"
          element={(
            <Suspense fallback="Loading...">
              <MovieDelete />
            </Suspense>
        )}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
