import styled from 'styled-components';

export const Group = styled.div`
  position: relative;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #999;
  position: absolute;
  left: 30px;
  top: 25px;
  transition: 0.2s ease all;
`;

export const Bar = styled.div`
  position: absolute;
  height: 3px;
  content: '';
  transform: rotateY(90deg);
  transition: transform .2s linear;
  background-color: #ea5a5a;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const InputField = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  font-size: 22px;
  padding-left: 15px;
  padding-bottom: 7px;
  border-bottom: 2px solid #999;
  margin-left: 50%;
  transform: translateX(-50%);
  &:focus ~ ${Label}, &:not(:placeholder-shown) ~ ${Label} {
  top: -5px;
  color: #ea5a5a;
  }
  &:focus ~ ${Bar}, &:not(:placeholder-shown) ~ ${Bar} {
  transform: rotateY(0deg);
  }
`;

export const Error = styled.div`
  position: absolute;
  font-family: Helvetica_Medium;
  font-size: 16px;
  color: red;
  bottom: -45%;
  left: 50%;
  transform: translateX(-50%);
`;
