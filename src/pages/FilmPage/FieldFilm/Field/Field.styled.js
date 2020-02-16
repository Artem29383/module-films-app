import styled from 'styled-components';

export default {
  Group: styled.div`
  position: relative;
`,
  StyledValue: styled.div`
  font-size: 22px;
  color: #444;
  word-break: break-word;
  border-bottom: 2px solid #444;
  width: 100%;
  padding: 30px 0 7px 15px;
  margin-left: 50%;
  transform: translateX(-50%);
`,
  WrapField: styled.div`
  padding: 0 55px;
`,
  Bar: styled.div`
  position: absolute;
  height: 3px;
  content: '';
  transform: rotateY(90deg);
  transition: transform .2s linear;
  background-color: #ea5a5a;
  width: 100%;
  bottom: 0;
  left: 0;
`
}