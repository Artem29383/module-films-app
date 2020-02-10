import React from 'react';
import styled from 'styled-components';

import {
  Bar,
  Group
} from '../../../../../components/Input/styles';
import Input from '../../../../../components/Input/Input';



export const StyledValue = styled.div`
  font-size: 22px;
  color: #444;
  word-break: break-word;
  border-bottom: 2px solid #444;
  width: 100%;
  padding: 30px 0 7px 15px;
  margin-left: 50%;
  transform: translateX(-50%);
`;

export const WrapField = styled.div`
  padding: 0 55px;
`;

const Field = ({
  value,
  handler,
  handlerKeyDown,
  handlerBlur,
  name,
  field,
  fnDBClick,
  target,
  valueDefault,
}) => (
  <Group>
    <WrapField>
      {(target !== name)
        ? <StyledValue
          onDoubleClick={fnDBClick}
          data-name={name}
        >
          {field}: {valueDefault}
        </StyledValue>
        : <Input
          value={value}
          handler={handler}
          type="text"
          blur={handlerBlur}
          keyDown={handlerKeyDown}
          focus={true}
        />}
    </WrapField>
    <Bar />
  </Group>
);

export default Field;