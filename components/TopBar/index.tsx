import React from 'react';
import Link from 'next/link';

import Logo from '../Logo';
// import './_topBar.scss';

const TopBar = () => (
  <div className="topBar">
    <Logo />
    <span className="topBar__button">
      <Link href="/movies/new" className="topBar__link">+ ADD MOVIE</Link>
    </span>
  </div>
);

export default TopBar;
