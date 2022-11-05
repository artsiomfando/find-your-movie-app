import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import useLocalStorage from '../helpers/useLocalStorage';
import { FILTER_OPTIONS } from '../constants';
import { TSortCategory } from '../types';

interface Props {
  onSortChange: (sortBy: TSortCategory) => void;
}

const FilterDropdown = ({ onSortChange }: Props) => {
  const [sortCategory, setSortCategory] = useLocalStorage('sortCategory', FILTER_OPTIONS[0].value);

  const onSortCategoryChange = (value: TSortCategory) => {
    onSortChange(value);
    setSortCategory(value);
  };

  return (
    <div className="filterDropdown">
      <span className="filterDropdown__title">SORT BY</span>
      <Dropdown
        className="filterDropdown__button"
        defaultValue={sortCategory}
        selection
        options={FILTER_OPTIONS}
        onChange={(_, { value }) => onSortCategoryChange(value as TSortCategory)}
      />
    </div>
  );
};

export default FilterDropdown;
