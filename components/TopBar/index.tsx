import React from 'react';
import Link from 'next/link';

import Logo from '../Logo';
import styles from './_topBar.module.scss';

const TopBar = () => (
  <div className={styles.topBar}>
    <Logo />
    <span className={styles.topBar__button}>
      <Link href="/movies/new" className={styles.topBar__link}>+ ADD MOVIE</Link>
    </span>
  </div>
);

export default TopBar;
