import React from 'react'
import { styled } from 'styled-components';
import NavbarRightSide from './NavbarRightSide';
import Logo from '../../reusable-ui/Logo'
import { theme } from '../../../theme';


export default function NavBar({username}) {
  return (
    <NavBarStyled>
      <Logo/>
      <NavbarRightSide username={username}/>
    </NavBarStyled>
  )
}
const NavBarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  padding: 0 70px 0 20px;
  display: flex;
  justify-content: space-between;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};

`;
