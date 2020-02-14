import React from 'react';


import Input from '../../../../components/Input/Input';
import FieldS from './Field.styled';
import S from '../../../../components/Input/Input.styled';




const Field = ({
  value,
  handler,
  handlerKeyDown,
  handlerBlur,
  name,
  field,
  fnDBClick,
  target,
  valueDefault,
}) => (
  <S.Group>
    <FieldS.WrapField>
      {(target !== name)
        ? <FieldS.StyledValue
          onDoubleClick={fnDBClick}
          data-name={name}
        >
          {field}: {valueDefault}
        </FieldS.StyledValue>
        : <Input
          value={value}
          handler={handler}
          type="text"
          blur={handlerBlur}
          keyDown={handlerKeyDown}
          focus={true}
        />}
    </FieldS.WrapField>
    <S.Bar />
  </S.Group>
);

export default Field;