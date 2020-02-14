import React, { memo } from 'react';
import S from './Input.styled';

const Input = ({
  value,
  handler,
  blur,
  keyDown,
  desc,
  isError,
  focus = false
}) => (
  <S.Group>
    <S.InputField
      value={value}
      onChange={handler}
      onBlur = {blur}
      onKeyDown = {keyDown}
      placeholder=' '
      type="text"
      autoFocus = {focus}
    />
    <S.Bar />
    <S.Label>{desc}</S.Label>
    {(isError && !value)
    && <S.Error>
      Заполните поле.
    </S.Error>}
  </S.Group>
);

export default memo(Input);