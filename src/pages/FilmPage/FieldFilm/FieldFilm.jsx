import React, { memo } from 'react';
import Field from './Field';


const FieldFilm = ({
  id,
  field,
  valueDefault,
  name,
}) => (
  <Field
    field={field}
    name={name}
    valueDefault={valueDefault}
    id={id}
  />
);

export default memo(FieldFilm);