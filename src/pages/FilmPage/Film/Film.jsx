import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
  NavLink,
  Redirect,
  useParams
} from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { getFieldsSelector, getFilmsSelector } from '../../../models/filmlist/selectors';
import useSelector from '../../../hooks/useSelector';
import FieldFilm from './FieldFilm';


const FilmContainer = styled.div`
  width: 500px;
  height: auto;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  padding-bottom: 30px;
`;

const Nav = styled(NavLink)`
  text-decoration:none;
  display: block;
  color: #fff;
`;

const Film = () => {
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
  
  
  return (
    <Fragment>
      {Object.keys(films).includes(id)
        ? <FilmContainer>
          {fields}
          <Button>
            <Nav to='/'>
              Закрыть окно
            </Nav>
          </Button>
        </FilmContainer>
        : <Redirect to='/' />}
    </Fragment>
  )
};

export default Film;