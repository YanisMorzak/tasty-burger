import React from 'react'
import { styled } from 'styled-components';
import NavbarRightSide from './NavbarRightSide';
import Logo from '../../reusable-ui/Logo'


export default function NavBar({username}) {
  return (
    <NavBarStyled>
      <Logo/>
      <NavbarRightSide username={username}/>
    </NavBarStyled>
  )
}
const NavBarStyled = styled.nav`
  background: blue;
  height: 10vh;
  padding: 0 70px 0 20px;
  display: flex;
  justify-content: space-between;

  .left-side{
    background: pink;
  }

`;
