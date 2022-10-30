import React, { useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react';

import { FILTER_OPTIONS } from '../constants';
import { TSortCategory } from '../types';

interface Props {
  onSortChange: (sortBy: TSortCategory) => void;
}

const FilterDropdown = ({ onSortChange }: Props) => {
  useEffect(() => onSortChange(FILTER_OPTIONS[0].value), []);

  return (
    <div className="filterDropdown">
      <span className="filterDropdown__title">SORT BY</span>
      <Dropdown
        className="filterDropdown__button"
        defaultValue={FILTER_OPTIONS[0].value}
        selection
        options={FILTER_OPTIONS}
        onChange={(_, { value }) => onSortChange(value as TSortCategory)}
      />
    </div>
  );
};

export default FilterDropdown;
