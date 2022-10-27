import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import moment from 'moment';

interface Props {
  name: string
  label: string
  placeholder: string
  [key: string]: any
}

const MovieDatePicker = ({ label, placeholder, ...props }: Props) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <div>
      {label}
      <DatePicker
        {...field}
        {...props}
        placeholderText={placeholder}
        dateFormat="yyyy-MM-dd"
        selected={(field.value && new Date(field.value)) || null}
        onChange={(date) => {
          const formattedDate = moment(date).format('yyyy-MM-DD');
          setFieldValue(field.name, formattedDate);
        }}
      />
    </div>
  );
};

export default MovieDatePicker;
