import React, { useCallback, useState } from 'react';

import Input from '../../../../components/Input/Input';
import S from './Field.styled';
import useAction from '../../../../hooks/useAction';
import useSelector from '../../../../hooks/useSelector';
import { getFilmsSelector } from '../../../../models/filmlist/selectors';
import { UPDATE_FILM_FIELD } from '../../../../models/currentFilm/action';


const Field = ({
  name,
  field,
  valueDefault,
  id
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState('');
  const updateFieldFilm = useAction(UPDATE_FILM_FIELD);
  const [target, setTarget] = useState('');
  const films = useSelector(getFilmsSelector);
  
  const editStartHandler = e => {
    setValue(valueDefault);
    setTarget(e.currentTarget.getAttribute('data-name'));
    setIsEdit(true);
  };
  
  const editStopBlurHandler = () => {
    if (value.trim() && value !== valueDefault) {
      updateFieldFilm({
        id,
        payload: {
          ...films[id],
          [target]: value
        }
      });
    } else {
      setValue(valueDefault);
    }
    setIsEdit(false);
  };
  
  const editHandler = useCallback(e => {
    setValue(e.currentTarget.value);
  }, [setValue]);
  
  const editStopKeyHandler = e => {
    if (e.key === 'Enter') {
      if (value !== valueDefault && value.trim()) {
        updateFieldFilm({
          id,
          payload: {
            ...films[id],
            [target]: value
          }
        });
      } else {
        setValue(valueDefault);
      }
      setIsEdit(false);
    }
    if (e.key === 'Escape') {
      setIsEdit(false);
      setValue(valueDefault);
    }
  };
  
  return (
    <S.Group>
      <S.WrapField>
        {(!isEdit)
          ? <S.StyledValue
            onDoubleClick={editStartHandler}
            data-name={name}
          >
            {field}: {valueDefault}
          </S.StyledValue>
          : <Input
            value={value}
            handler={editHandler}
            type="text"
            blur={editStopBlurHandler}
            keyDown={editStopKeyHandler}
            focus={true}
          />}
      </S.WrapField>
      <S.Bar />
    </S.Group>
  )
};

export default Field;