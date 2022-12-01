import React, { MouseEvent } from 'react';
import { Menu, MenuItemProps } from 'semantic-ui-react';

import { GENRES } from '../constants';

export interface Props {
  onGenreChange: (genre: string) => void
  activeGenre: string
}

const FilterGenre = ({ onGenreChange, activeGenre }: Props) => {
  const onItemClick = (_: MouseEvent, { name }: MenuItemProps) => {
    onGenreChange(name?.toLowerCase()!);
  };

  const genreList = GENRES
    .map((genreItem) => (
      <Menu.Item
        key={genreItem}
        name={genreItem}
        active={activeGenre.toLowerCase() === genreItem.toLowerCase()}
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
