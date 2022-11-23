import React, { useEffect } from 'react';
import { useField } from 'formik';

interface Props {
  value: string
  setWarning: (warningText: string | undefined) => void
}

const MovieCheckbox = ({ value, setWarning }: Props) => {
  const [field, meta] = useField('genres');

  useEffect(() => {
    setWarning(meta.error);
  }, [meta.error]);

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
