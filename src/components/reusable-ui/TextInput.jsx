import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../theme';

export default function TextInput({value, onChange, Icon, className, ...restProps}) {
  return (
    <InputStyled className={className}>
      <div className='icon'>{Icon && Icon}</div>
      <input type="text" onChange={onChange} value={value} {...restProps}  />
    </InputStyled >
  )
}

const InputStyled = styled.div`

    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;

    .icon{
      display: flex;
      justify-content: center;
      align-items: center;
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
