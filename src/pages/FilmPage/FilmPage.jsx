import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../components/Button/Button';
import useSelector from '../../hooks/useSelector';
import FieldFilm from './FieldFilm';
import S from './FilmPage.styled';
import {
  getFieldsSelector,
  getFilmSelector,
  getStatusLoading
} from '../../models/currentFilm/selectors';
import Loader from '../../components/Loader/Loader';
import useAction from '../../hooks/useAction';
import { GET_FILM, SET_LOADING_FILM } from '../../models/currentFilm/action';


const FilmPage = () => {
  const isLoading = useSelector(getStatusLoading);
  const getCurrentFilm = useAction(GET_FILM);
  const setLoading = useAction(SET_LOADING_FILM);
  const id = useParams().id;
  const ids = useSelector(getFieldsSelector)();
  const film = useSelector(getFilmSelector);
  
  const getFilm = () => {
      if (film.id !== Number(id)) {
        setLoading(true);
        getCurrentFilm(id);
      }
  };
  
  useEffect(() => {
    getFilm();
  }, []);
  
  
  if (isLoading) return <Loader />;
  const fields = ids.map((item, i) => (
    <FieldFilm
      key={i}
      id={id}
      name = {item}
      field={film.fields[i]}
      valueDefault={film[item]}
    />));
  
  
  
  
  
  return (
    <S.FilmContainer>
      {fields}
      <Button>
        <S.Nav to='/'>
          Закрыть окно
        </S.Nav>
      </Button>
    </S.FilmContainer>
  )
};

export default FilmPage;