import React from 'react';

const FilterGenre = () => {
  const genreItems = ['all', 'documentary', 'comedy', 'horror', 'crime'];
  const genreList = genreItems
    .map((genreItem) => <li key={genreItem}>{genreItem.toUpperCase()}</li>);

  return (
    <ul className="filterGenre">
      {genreList}
    </ul>
  );
};

export default FilterGenre;
