import React from 'react';
import {
  Bar,
  Error,
  Group,
  InputField,
  Label
} from './styles';

const Input = ({
  value,
  handler,
  blur,
  keyDown,
  desc,
  isError,
  focus = false
}) => (
  <Group>
    <InputField
      value={value}
      onChange={handler}
      onBlur = {blur}
      onKeyDown = {keyDown}
      placeholder=' '
      type="text"
      autoFocus = {focus}
    />
    <Bar />
    <Label>{desc}</Label>
    {(isError && !value)
    && <Error>
      Заполните поле.
    </Error>}
  </Group>
);

export default Input;