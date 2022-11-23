import React from 'react';
import { useRouter } from 'next/router';
import { Field, Form, Formik } from 'formik';

import styles from './_searchBar.module.scss';

const SearchInput = () => {
  const router = useRouter();

  const onSearchSubmit = ({ query }: { query: string }) => {
    const navigateTo = query === '' ? '/' : `/search/${query}`;

    router.push(navigateTo);
  };

  return (
    <div className={styles.searchBar}>
      <Formik
        initialValues={{
          query: ''
        }}
        onSubmit={onSearchSubmit}
      >
        <Form className={styles.searchBar__form} autoComplete="off">
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
