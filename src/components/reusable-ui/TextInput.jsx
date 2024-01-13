import React from 'react'
import { css, styled } from 'styled-components';
import { theme } from '../../theme';

export default function TextInput({value, onChange, Icon, className, version, ...restProps}) {
  return (
    <InputStyled className={className} version={version}>
      <div className='icon'>{Icon && Icon}</div>
      <input type="text" onChange={onChange} value={value} {...restProps}  />
    </InputStyled >
  )
}

const InputStyled = styled.div`
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
        width: 90%;
    }

    ${(props) => props.version === "normal" && extraNormalStyle};
    ${(props) => props.version === "minimalist" && extraMinimalistStyle};
`;

const extraNormalStyle = css`
  background:${theme.colors.white};
  padding: 18px 28px;
`
const extraMinimalistStyle = css`
  background: ${theme.colors.background_white};
  padding: 8px 16px;
  
  input{
    background: ${theme.colors.background_white};

    &:focus{
      outline: 0;
    }
  }
`
