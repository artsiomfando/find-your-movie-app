import React from 'react';
import { useField } from 'formik';

interface Props {
  label: string
  id: string
  name: string
  as?: string
  [key: string]: any
}

const MovieTextInput = ({
  label, as, ...props
}: Props) => {
  const [field] = useField(props);
  const isTextarea = as === 'textarea';

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      {
        isTextarea
          ? <textarea {...field} {...props} />
          : <input {...field} {...props} />
      }
    </div>
  );
};

export default MovieTextInput;
