import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../theme';

export default function PrimaryButton({label, Icon, className}) {
  return (
    <PrimaryButtonStyled className={className}>
    <span >{label}</span>
    {Icon && Icon}
   </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`

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

    .icon-button {
        margin-left: 8px;
    }

    &:hover{
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
    }

  
`;
