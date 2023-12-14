import React from 'react'
import { styled } from 'styled-components';
import NavbarRightSide from './NavbarRightSide';


export default function NavBar({username}) {
  return (
    <NavBarStyled>
          <div className='left-side'>
            <p>Navbar</p>
          </div>
         <NavbarRightSide username={username}/>
    </NavBarStyled>
  )
}
const NavBarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;

  .left-side{
    background: pink;
  }

`;
