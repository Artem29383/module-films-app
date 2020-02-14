import React  from 'react';
import { Redirect, useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { getFieldsSelector, getFilmsSelector } from '../../models/filmlist/selectors';
import useSelector from '../../hooks/useSelector';
import FieldFilm from './FieldFilm';
import S from './FilmPage.styled';


const FilmPage = () => {
  const id = useParams().id;
  const films = useSelector(getFilmsSelector);
  const ids = useSelector(getFieldsSelector)(id);
  const fields = ids.map((item, i) => (
    <FieldFilm
      key={i}
      id={id}
      field={films[id].fields[i]}
      name={item}
      valueDefault={films[id][item]}
      films={films}
    />));
  
  if (!Object.keys(films).includes(id)) return <Redirect to='/' />;
  
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