import React from 'react';
import { useField } from 'formik';

import './_movieCheckbox.scss';

interface Props {
  value: string
  [key: string]: any
}

const MovieCheckbox = ({ value }: Props) => {
  const [field] = useField('genres');

  return (
    <div className="movieForm__checkbox-container">
      <label>
        {value}
        <input className="movieForm__checkbox" type="checkbox" {...field} value={value} />
        <span className="movieForm__checkmark" />
      </label>
    </div>
  );
};

export default MovieCheckbox;
