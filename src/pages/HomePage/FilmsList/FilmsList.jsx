import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import Input from '../../../components/Input/Input';
import classes from './FilmsList.module.scss';
import useSelector from '../../../hooks/useSelector';
import {
  getFilmsSelector,
  getFilteredItems
} from '../../../models/filmlist/selectors';
import useAction from '../../../hooks/useAction';
import { DELETE_FILM } from '../../../models/filmlist/action';
import { isEmpty } from '../../../utils/isEmpty';
import FilmItem from './FilmItem/FilmItem';

const FilmsList = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const films = useSelector(getFilmsSelector);
  const filteredFilms = useSelector(getFilteredItems)(search);
  const searchStr = queryString.parse(history.location.search).search || '';
  const isSearch = isEmpty(searchStr);
  const removeFilm = useAction(DELETE_FILM);
  
  
  const searchHandler = useCallback(e => {
    const {value} = e.currentTarget;
    if (value.trim()) {
      setSearch(value);
      history.push(`/?search=${value.toLowerCase()}`);
    } else {
      setSearch('');
      history.push('/');
    }
  }, [setSearch, history]);
  
  
  const removeFilmHandler = (id) => {
    removeFilm(id);
  };
  
  useEffect(() => {
    if (isSearch) {
      setSearch(searchStr);
    }
  }, []);
  
  useEffect(() => {
    if (!isSearch && search) {
      setSearch('');
    }
  }, [isSearch, search]);
  
  const filmsList = filteredFilms.map(id =>
    <FilmItem
      key = {id}
      id = {id}
      films = {films}
      removeFilmHandler={removeFilmHandler}
    />);
  
  
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
