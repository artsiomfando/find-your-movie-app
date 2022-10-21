import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const FilterDropdown = () => {
  const filterOptions = [
    { text: 'RELEASE DATE', value: 'RELEASE DATE' },
    { text: 'RATING', value: 'RATING' },
  ];

  return (
    <div className="filterDropdown">
      <span className="filterDropdown__title">SORT BY</span>
      <Dropdown
        className="filterDropdown__button"
        defaultValue="RELEASE DATE"
        selection
        options={filterOptions}
      />
    </div>
  );
};

export default FilterDropdown;
