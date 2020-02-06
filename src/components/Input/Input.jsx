import React from 'react';
import classes from './Input.module.scss';

const Input = ({
  value,
  handler,
  desc,
  isError
}) => (
  <div className={classes.group}>
    <input
      value={value}
      onChange={handler}
      placeholder=' '
      className={classes.frameInput}
      type="text" />
    <div className={classes.bar} />
    <label className={classes.label}>{desc}</label>
    {(isError && !value)
    && <div className={classes.error}>
      Заполните поле.
    </div>}
  </div>
);

export default Input;