import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import MovieCheckbox from '../MovieCheckbox';
import './_movieDropdown.scss';

interface Props {
  options: string[]
  label: string
  placeholder: string
}

const MovieDropdown = ({ options, label, placeholder }: Props) => (
  <div>
    <div>{label}</div>
    <Dropdown
      text={placeholder}
      className="icon movieForm__inputs__input"
    >
      <Dropdown.Menu>
        {options.map((option) => (
          <MovieCheckbox key={option} value={option} />
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </div>
);

export default MovieDropdown;
