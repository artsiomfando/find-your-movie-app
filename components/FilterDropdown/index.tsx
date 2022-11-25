import React, { useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react';

import useLocalStorage from '../helpers/useLocalStorage';
import { FILTER_OPTIONS } from '../constants';
import { TSortCategory } from '../types';

interface Props {
  onSortChange: (sortBy: TSortCategory) => void;
  activeSortCategory: string
}

const FilterDropdown = ({ onSortChange, activeSortCategory }: Props) => {
  const [, setSortCategory] = useLocalStorage('sortCategory', FILTER_OPTIONS[1].value);

  const onSortCategoryChange = (value: TSortCategory) => {
    onSortChange(value);
  };

  useEffect(() => {
    setSortCategory(activeSortCategory);
  }, [activeSortCategory]);

  return (
    <div className="filterDropdown">
      <span className="filterDropdown__title">SORT BY</span>
      <Dropdown
        className="filterDropdown__button"
        selection
        value={activeSortCategory}
        options={FILTER_OPTIONS}
        onChange={(_, { value }) => onSortCategoryChange(value as TSortCategory)}
      />
    </div>
  );
};

export default FilterDropdown;
