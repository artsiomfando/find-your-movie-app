import React from 'react';

import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';
import moviesApi from '../../api/moviesApi';

export default function Movie({ movies }: any) {
  return (
  <>
    <SearchBar movies={movies} />
    <Footer />
  </>
  )
};

export const getServerSideProps = async (context: any) => {
  const response = await moviesApi.get('/movies', {
    params: {
      sortBy: 'release_date',
      sortOrder: 'desc',
      filter: '',
      search: context.params.searchQuery,
      searchBy: 'title'
    }
  });

  return { props: { movies: response.data.data } };
}
