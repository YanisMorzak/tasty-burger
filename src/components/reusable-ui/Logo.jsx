import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../theme';

export default function Logo({className, onClick}) {
  return (
    <LogoStyled className={className} onClick={onClick}>
        <h1>TASTY</h1>
        <img src="/images/burger-logo.png" alt="logo-tasty-burger" />
        <h1>BURGER</h1>
    </LogoStyled>
  )
}
const LogoStyled = styled.div`
display: flex;
align-items: center;

h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P5};
    letter-spacing: 2.5px;
    text-transform: uppercase;
    font-family: 'Syne', sans-serif;
}

img {
    height: 85px;
    margin: 0 6px 0 2px;
}

  
`;