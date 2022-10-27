import React, { useState, MouseEvent } from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';

import { GENRES } from '../constants';

const FilterGenre = () => {
  const [activeItem, setActiveItem] = useState('ALL');
  const genreItems = ['all', ...GENRES];

  const onItemClick = (_: MouseEvent, { name }: MenuItemProps) => setActiveItem(name!);

  const genreList = genreItems
    .map((genreItem) => (
      <Menu.Item
        key={genreItem}
        name={genreItem}
        active={activeItem === genreItem}
        onClick={onItemClick}
      />

    ));

  return (
    <Menu pointing secondary className="filterGenre">
      {genreList}
    </Menu>
  );
};

export default FilterGenre;
