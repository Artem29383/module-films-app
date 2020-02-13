import React from 'react';
import { Btn } from './styles';


const Button = ({ children, clickHandler }) => (
  <Btn onClick={clickHandler}>
    {children}
  </Btn>
);

export default Button;