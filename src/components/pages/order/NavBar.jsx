import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components';


export default function NavBar({username}) {
  return (
    <NavBarStyled>
          <p>Navbar</p>
          <h1>Bonjour {username}</h1>
          <Link to="/"><button>Déconnexion</button></Link>
    </NavBarStyled>
  )
}
const NavBarStyled = styled.nav`
  background: blue;
  height: 10vh;

`;
