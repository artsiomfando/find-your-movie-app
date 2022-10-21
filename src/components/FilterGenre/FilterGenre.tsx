import React, { useState, MouseEvent } from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';

const FilterGenre = () => {
  const [activeItem, setActiveItem] = useState('ALL');
  const genreItems = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

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
