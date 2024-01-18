import React from 'react'
import { css, styled } from 'styled-components';
import { theme } from '../../theme';

export default function Button({label, Icon, className, version, onClick, style}) {
  return (
    <ButtonStyled className={className} version={version} onClick={onClick} style={style}>
    <span >{label}</span>
    <div className='icon'>{Icon && Icon}</div>
   </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  ${(props) => props.version === "normal" && extraNormalStyle}
  ${(props) => props.version === "succes" && extraSuccesStyle}
`;
const extraNormalStyle = css`
 background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.SM};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px 24px;
    margin: 18px 0;
    border-radius: 5px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.3s ease;

    .icon{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${theme.fonts.size.P1};
      margin-left: 4px;  
    }

    &:hover{
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
    }

`
const extraSuccesStyle = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  margin-right: 10px;
  height: 100%;
  padding: 0 1.5em;
  &:hover{
    color: ${theme.colors.success};
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.success};
  }
  &:active{
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }


`
