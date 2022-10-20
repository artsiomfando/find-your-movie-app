import React from 'react';

import FilterGenre from '../FilterGenre/FilterGenre';
import FilterDropdown from '../FilterDropdown/FilterDropdown';

const FilterBar = () => (
  <div className="filterBar">
    <FilterGenre />
    <FilterDropdown />
  </div>
);

export default FilterBar;
