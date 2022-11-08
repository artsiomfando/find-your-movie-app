import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

import MovieCheckbox from '../MovieCheckbox';
import './_movieDropdown.scss';

interface Props {
  options: string[]
  label: string
  placeholder: string
}

const MovieDropdown = ({ options, label, placeholder }: Props) => {
  const [dropdownWarning, setDropdownWarning] = useState<string | undefined>(undefined);
  const [isTouched, setIsTouched] = useState(false);

  const showWarning = (warningText: string | undefined) => {
    setDropdownWarning(warningText);
  };

  return (
    <div>
      <div>{label}</div>
      <Dropdown
        text={placeholder}
        className="icon movieForm__inputs__input"
        onClick={() => setIsTouched(true)}
      >
        <Dropdown.Menu>
          {options.map((option) => (
            <MovieCheckbox
              key={option}
              value={option}
              setWarning={showWarning}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
      {isTouched && dropdownWarning ? <div>{dropdownWarning}</div> : null}
    </div>
  );
};

export default MovieDropdown;
