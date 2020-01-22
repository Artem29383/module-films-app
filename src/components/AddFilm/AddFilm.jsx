import React, { useCallback, useEffect, useState } from 'react';
import classes from './AddFilm.module.scss';
import classnames from 'classnames';
import Input from '../Input/Input';
import Button from '../Button/Button';
import useSelector from '../../hooks/useSelector';
import { getIsPost } from '../../models/filmlist/selectors';
import useAction from '../../hooks/useAction';
import {
  POST_FILM,
  POST_FILM_SUCCESS
} from '../../models/filmlist/action';


const AddFilm = () => {
  
  const [isShow, setIsShow] = useState(false);
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [date, setDate] = useState('');
  const [country, setCountry] = useState('');
  const [isError, setIsError] = useState(false);
  const isDone = useSelector(getIsPost);
  const postFilm = useAction(POST_FILM);
  const setIsDone = useAction(POST_FILM_SUCCESS);
  
  const showHandler = () => {
    setIsShow(!isShow);
    if (isShow) {
      setName('');
      setGenre('');
      setDate('');
      setCountry('');
    }
  };
  
  const nameHandler = useCallback(e => {
    setName(e.currentTarget.value);
  }, [setName]);
  
  const genreHandler = useCallback(e => {
    setGenre(e.currentTarget.value);
  }, [setGenre]);
  
  const dateHandler = useCallback(e => {
    setDate(e.currentTarget.value);
  }, [setDate]);
  
  const countryHandler = useCallback(e => {
    setCountry(e.currentTarget.value);
  }, [setCountry]);
  
  const sumbitHandler = () => {
    if (name.trim() && genre.trim() && date.trim() && country.trim()) {
      const id = Date.now();
      postFilm({
        id, payload: {
          id, name, genre, date, country, fields: [
            'Название', 'Жанр', 'Дата выхода', 'Страна'
          ]
        }
      });
      setName('');
      setGenre('');
      setDate('');
      setCountry('');
    } else {
      setIsError(true);
    }
  };
  
  useEffect(() => {
    if (isError) {
      setTimeout(() => setIsError(false), 2000);
    }
    if (isDone) {
      setTimeout(() => setIsDone(false), 2000);
    }
  }, [isError, isDone, setIsDone]);

  return (
    <div
      className={classnames(
        classes.createdFilmFrame,
        isShow && classes.show)
      }>
      <div className={classes.frameContent}>
        <div className={classes.title}>
          <div className={classes.titleText}>
            Добавить фильм
          </div>
        </div>
        <div className={classes.frameFields}>
          <Input isError={isError} value={name} handler={nameHandler} desc='Название' />
          <Input isError={isError} value={genre} handler={genreHandler} desc='Жанр' />
          <Input isError={isError} value={date} handler={dateHandler} desc='Дата выхода' />
          <Input isError={isError} value={country} handler={countryHandler} desc='Страна выпуска' />
          {isDone &&
          <div className={classnames(
            classes.error,
            classes.green
          )}>
            Фильм добавлен.
          </div>}
        </div>
        <Button text='Добавить фильм' fn={sumbitHandler} />
        <span
          className={classnames(
            classes.close,
            isShow && classes.active)
          }
          onClick={showHandler}>
            ✖
          </span>
      </div>
    </div>
  )
};

export default AddFilm;