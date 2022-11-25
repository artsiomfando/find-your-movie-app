import React from 'react';

import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import moviesApi from '../api/moviesApi';

// eslint-disable-next-line react/function-component-definition
export default function HomePage({ movies }: any) {
  return (
    <>
      <SearchBar movies={movies} />
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await moviesApi.get('/movies', {
    params: {
      sortBy: 'release_date',
      sortOrder: 'desc',
      filter: '',
      search: '',
      searchBy: 'title'
    }
  });

  return { props: { movies: response.data.data } };
}
