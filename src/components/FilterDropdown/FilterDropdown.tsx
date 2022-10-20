import React from 'react';

const FilterDropdown = () => (
  <div className="filterDropdown">
    <span className="filterDropdown__title">SORT BY</span>
    <button type="button" className="filterDropdown__button">
      RELEASE DATE
      <div className="filterDropdown__button-icon" />
    </button>
  </div>
);

export default FilterDropdown;
