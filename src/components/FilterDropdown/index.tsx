import React, { useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react';

interface Props {
  onSortChange: (sortBy: string) => void;
}

const FilterDropdown = ({ onSortChange }: Props) => {
  const filterOptions = [
    { text: 'RELEASE DATE', value: 'release_date' },
    { text: 'RATING', value: 'vote_average' },
  ];

  useEffect(() => onSortChange(filterOptions[0].value), []);

  return (
    <div className="filterDropdown">
      <span className="filterDropdown__title">SORT BY</span>
      <Dropdown
        className="filterDropdown__button"
        defaultValue="release_date"
        selection
        options={filterOptions}
        onChange={(_, { value }) => onSortChange(value as string)}
      />
    </div>
  );
};

export default FilterDropdown;
