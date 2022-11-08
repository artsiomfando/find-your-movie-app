import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import './_topBar.scss';

const TopBar = () => (
  <div className="topBar">
    <Logo />
    <span className="topBar__button">
      <Link to="/movies/new" className="topBar__link">+ ADD MOVIE</Link>
    </span>
  </div>
);

export default TopBar;
