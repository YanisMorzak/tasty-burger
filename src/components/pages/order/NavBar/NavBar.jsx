import React from 'react'
import { styled } from 'styled-components';
import NavbarRightSide from './NavbarRightSide';
import Logo from '../../../reusable-ui/Logo'
import { theme } from '../../../../theme';
import { refreshPage } from '../../../../utils/window';


export default function NavBar() {
  return (
    <NavBarStyled>
      <Logo className="logo-order-page" onClick={refreshPage}/>
      <NavbarRightSide />
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
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo-order-page{
    cursor: pointer;
  }

`;
