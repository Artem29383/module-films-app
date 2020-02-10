import React, { useCallback, useState } from 'react';
import Field from './Field';
import useAction from '../../../../hooks/useAction';
import { UPDATE_FILM_FIELD } from '../../../../models/filmlist/action';


const FieldFilm = ({
  id,
  field,
  valueDefault,
  name,
  films
}) => {
  const [target, setTarget] = useState('');
  const [value, setValue] = useState('');
  const [original, setOriginal] = useState('');
  const updateFieldFilm = useAction(UPDATE_FILM_FIELD);
  
  const editStartHandler = e => {
    setValue(valueDefault);
    setOriginal(valueDefault);
    setTarget(e.currentTarget.getAttribute('data-name'));
  };
  
  
  const editStopBlurHandler = () => {
    if (value.trim() && value !== original) {
      updateFieldFilm({
        id,
        payload: { ...films[id], [target]: value }
      });
      setTarget('');
    } else {
      setTarget('');
      setValue(original);
    }
  };
  
  const editHandler = useCallback(e => {
    setValue(e.currentTarget.value);
  }, [setValue]);
  
  const editStopKeyHandler = e => {
    if (e.key === 'Enter') {
      if (value !== original && value.trim()) {
        updateFieldFilm({
          id,
          payload: { ...films[id], [target]: value }
        });
        setTarget('');
      } else {
        setValue(original);
        setTarget('');
      }
    }
    if (e.key === 'Escape') {
      setTarget('');
      setValue(original);
    }
  };
  
  
  return (
    <Field
      value={value}
      fnDBClick={editStartHandler}
      handlerBlur={editStopBlurHandler}
      handlerKeyDown={editStopKeyHandler}
      handler={editHandler}
      field={field}
      name={name}
      valueDefault={valueDefault}
      target={target}
    />
  )
};

export default FieldFilm;