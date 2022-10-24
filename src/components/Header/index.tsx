import React from 'react';

import TopBar from '../TopBar';
import SearchBar from '../SearchBar';
import './_header.scss';

const Header = () => (
  <div className="appHeader">
    <div className="appHeader__blur" />
    <TopBar />
    <p className="appHeader__title">FIND YOUR MOVIE</p>
    <SearchBar />
  </div>
);

export default Header;
