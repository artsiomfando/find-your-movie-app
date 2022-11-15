import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';

import './_searchBar.scss';

const SearchInput = () => {
  const navigate = useNavigate();
  const { searchQuery } = useParams();

  const onSearchSubmit = ({ query }: { query: string }) => {
    if (query === '') {
      navigate('/search');
    } else {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="searchBar">
      <Formik
        initialValues={{
          query: searchQuery || ''
        }}
        onSubmit={onSearchSubmit}
      >
        <Form className="searchBar__form" autoComplete="off">
          <Field
            type="text"
            name="query"
            placeholder="What do you want to watch"
          />
          <button type="submit" className="button">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchInput;
