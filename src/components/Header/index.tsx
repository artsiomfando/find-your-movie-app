import React from 'react';

import TopBar from '../TopBar';
import SearchInput from '../SearchInput';
import './_header.scss';

const Header = () => (
  <div className="appHeader">
    <div className="appHeader__blur" />
    <TopBar />
    <p className="appHeader__title">FIND YOUR MOVIE</p>
    <SearchInput />
  </div>
);

export default Header;
