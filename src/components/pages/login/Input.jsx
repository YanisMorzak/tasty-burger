import React from 'react'
import { styled } from 'styled-components';

export default function Input({value, onChange, Icon, ...restProps}) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input type="text" onChange={onChange} value={value} {...restProps}  />
    </InputStyled >
  )
}

const InputStyled = styled.div`

    background-color: #ffffff;
    border-radius: 5px;
    padding: 18px 24px;
    margin: 18px 0;
    display: flex;
    align-items: center;

    .icon{
        color: #919191;
        font-size: 17px;
        margin-right: 8px;
    }

    input {
        border: none;
        padding: 4px;
        color: #151515;
        font-size: 15px;
        width: 80%;
    }
  
`;
