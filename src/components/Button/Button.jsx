import React, { memo } from 'react';
import { Btn } from './Button.styled';

const Button = ({ children, clickHandler }) => (
  <Btn onClick={clickHandler}>
    {children}
  </Btn>
);

export default memo(Button);