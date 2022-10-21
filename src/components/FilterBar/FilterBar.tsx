import React from 'react';

import FilterGenre from '../FilterGenre/FilterGenre';
import FilterDropdown from '../FilterDropdown/FilterDropdown';
import FilterResults from '../FilterResults/FilterResults';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const mockData = [
  {
    title: 'Once upon a time',
    description: 'detective',
  },
  {
    title: 'Twice upon a time',
    description: 'fairytale',
  },
  {
    title: 'Third upon a time',
    description: 'action',
  }
];

const SafeErrorComponent = ({ errorMessage }: { errorMessage: string }) => (
  <div>
    <p>Something went wrong!</p>
    <p>{errorMessage}</p>
  </div>
);

const FilterBar = () => (
  <div className="filterBar">
    <div className="filterBar__nav">
      <FilterGenre />
      <FilterDropdown />
    </div>
    <ErrorBoundary ErrorComponent={SafeErrorComponent}>
      <FilterResults moviesList={mockData} />
    </ErrorBoundary>
  </div>
);

export default FilterBar;
