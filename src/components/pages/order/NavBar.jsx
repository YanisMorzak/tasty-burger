import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components';


export default function NavBar({username}) {
  return (
    <NavBarStyled>
          <div className='left-side'>
            <p>Navbar</p>
          </div>
          <div className='right-side'>
            <h1>Bonjour {username}</h1>
            <Link to="/"><button>Déconnexion</button></Link>
          </div>
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

  .right-side {
    background: purple;
  }

`;
