import React from 'react';

import TopBar from '../TopBar';
import SearchInput from '../SearchInput';
import styles from './_header.module.scss';

const Header = () => (
  <div className={styles.appHeader}>
    <div className={styles.appHeader__blur} />
    <TopBar />
    <p className={styles.appHeader__title}>FIND YOUR MOVIE</p>
    <SearchInput />
  </div>
);

export default Header;
