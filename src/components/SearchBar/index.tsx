import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';

import { selectSortCategory, selectfilterByGenre } from '../../redux/selectors';
import { fetchMovies } from '../../redux/apiCalls';
import { AppDispatch } from '../../redux/store';
import './_searchBar.scss';

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const sortCategory = useSelector(selectSortCategory);
  const genreCategory = useSelector(selectfilterByGenre);

  const onSearchSubmit = ({ searchQuery }: { searchQuery: string }) => {
    const searchParams = { sortBy: sortCategory, genre: genreCategory || 'all' };
    navigate({
      pathname: `/search/${searchQuery}`,
      search: `?${createSearchParams(searchParams)}`
    });

    dispatch(fetchMovies({
      sortCategory,
      genreCategory,
      searchQuery,
      searchCategory: 'title'
    }));
  };

  return (
    <div className="searchBar">
      <Formik
        initialValues={{
          searchQuery: ''
        }}
        onSubmit={onSearchSubmit}
      >
        <Form className="searchBar__form" autoComplete="off">
          <Field type="text" name="searchQuery" placeholder="What do you want to watch" />
          <button type="submit" className="button">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
