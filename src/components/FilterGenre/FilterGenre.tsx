import React from 'react';

const FilterGenre = () => {
  const genreItems = ['all', 'documentary', 'comedy', 'horror', 'crime'];
  const genreList = genreItems
    .map((genreItem, i) => <li className={i === 0 ? 'activeTab' : undefined} key={genreItem}>{genreItem.toUpperCase()}</li>);

  return (
    <ul className="filterGenre">
      {genreList}
    </ul>
  );
};

export default FilterGenre;
