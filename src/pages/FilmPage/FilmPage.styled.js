import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default {
  FilmContainer: styled.div`
  width: 500px;
  height: auto;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  padding-bottom: 30px;
`,
  Nav: styled(NavLink)`
  text-decoration: none;
  display: block;
  color: #fff;
`
}