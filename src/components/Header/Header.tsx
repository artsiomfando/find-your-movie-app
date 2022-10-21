import React from 'react';

import TopBar from '../TopBar/TopBar';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => (
  <div className="appHeader">
    <div className="appHeader__blur" />
    <TopBar />
    <p className="appHeader__title">FIND YOUR MOVIE</p>
    <SearchBar />
  </div>
);

export default Header;
