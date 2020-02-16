import React, { memo } from 'react';
import Field from './Field';


const FieldFilm = ({
  id,
  field,
  valueDefault,
  name,
  films
}) => (
  <Field
    field={field}
    name={name}
    valueDefault={valueDefault}
    films={films}
    id={id}
  />
);

export default memo(FieldFilm);