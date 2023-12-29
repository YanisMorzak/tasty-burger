import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../theme';

export default function TextInput({value, onChange, Icon, ...restProps}) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input type="text" onChange={onChange} value={value} {...restProps}  />
    </InputStyled >
  )
}

const InputStyled = styled.div`

    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    padding: 18px 24px;
    margin: 18px 0;
    display: flex;
    align-items: center;

    .icon{
        color: ${theme.colors.greySemiDark};
        font-size: ${theme.fonts.size.P1};
        margin-right: 8px;
    }

    input {
        border: none;
        padding: 4px;
        color: ${theme.colors.dark};
        font-size: ${theme.fonts.size.SM};
        width: 80%;
    }
  
`;
