import React, { useCallback, useEffect, useState } from 'react';
import Input from '../../../components/Input/Input';
import {
  NavLink,
  useHistory
} from 'react-router-dom';
import classes from './FilmsList.module.scss';
import useSelector from '../../../hooks/useSelector';
import {
  getFilmsSelector,
  getFilteredItems
} from '../../../models/filmlist/selectors';
import useAction from '../../../hooks/useAction';
import { DELETE_FILM } from '../../../models/filmlist/action';

const FilmsList = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const films = useSelector(getFilmsSelector);
  const filteredFilms = useSelector(getFilteredItems)(search);
  const isSearch = /\?search=([(a-zA-Z)|(а-яА-Я)|\w]+)/.test(history.location.search);
  const removeFilm = useAction(DELETE_FILM);
  
  
  const searchHandler = useCallback(e => {
    if (e.currentTarget.value.trim()) {
      setSearch(e.currentTarget.value);
      history.push(`/?search=${e.currentTarget.value.toLowerCase()}`);
    } else {
      setSearch('');
      history.push(`/`);
    }
  }, [setSearch, history]);
  
  
  const removeFilmHandler = (id) => {
    removeFilm(id);
  };
  
  useEffect(() => {
    if (isSearch) {
      const match = history.location.search.match(/=(.+)$/m)[1].replace(/%20/g, ' ');
      setSearch(match);
    }
  }, []);
  
  useEffect(() => {
    if (!isSearch && search) {
      setSearch('');
    }
  }, [isSearch, search]);
  
  const filmsList = filteredFilms.map(id => {
    return (
      <li key={id} className={classes.item}>
        <NavLink
          to={`/films/${id}`}
          activeClassName={classes.active}
          className={classes.filmsItem}
        >
          <div className={classes.title}>
            <span className={classes.titleText}>
              {films[id].name}
            </span>
          </div>
        </NavLink>
        <NavLink to='/' className={classes.removeBtn} onClick={() => removeFilmHandler(id)}>
          ✖
        </NavLink>
      </li>
    )
  });
  
  
  return (
    <div className={classes.filmsContainer}>
      <div className={classes.search}>
        <Input value={search} handler={searchHandler} desc='Введите название фильма' />
      </div>
      <div className={classes.content}>
        <ul>
          {filmsList}
        </ul>
      </div>
    </div>
  )
};

export default FilmsList;