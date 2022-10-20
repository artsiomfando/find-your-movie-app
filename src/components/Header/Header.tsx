import React from 'react';

import TopBar from '../TopBar/TopBar';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => (
  <div className="header">
    <div className="header__blur" />
    <TopBar />
    <p className="header__title">FIND YOUR MOVIE</p>
    <SearchBar />
  </div>
);

export default Header;
