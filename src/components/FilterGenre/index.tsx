import React, { useState, MouseEvent } from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';

import { GENRES } from '../constants';

interface Props {
  onGenreChange: (genre: string) => void
}

const FilterGenre = ({ onGenreChange }: Props) => {
  const [activeItem, setActiveItem] = useState(GENRES[0]);

  const onItemClick = (_: MouseEvent, { name }: MenuItemProps) => {
    setActiveItem(name!);
    onGenreChange(name!);
  };

  const genreList = GENRES
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
