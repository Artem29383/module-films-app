import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './FilmItem.module.scss';

const FilmItem = ({ id, films, removeFilmHandler }) => (
  <li key={id} className={classes.item}>
    <NavLink
      to={`/films/${id}`}
      className={classes.filmsItem}
    >
      <div className={classes.title}>
        <span className={classes.titleText}>
          {films[id].name}
        </span>
      </div>
    </NavLink>
    <NavLink to='/' className={classes.removeBtn} onClick={() => removeFilmHandler(id)} />
  </li>
);

export default memo(FilmItem);