import React from 'react';

import Logo from '../Logo';
import './_topBar.scss';

const TopBar = () => (
  <div className="topBar">
    <Logo />
    <span className="topBar__button">
      <a href="/" className="topBar__link">+ ADD MOVIE</a>
    </span>
  </div>
);

export default TopBar;
