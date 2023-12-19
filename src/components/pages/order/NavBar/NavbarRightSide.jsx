import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components';
import Profile from './Profile';

export default function NavbarRightSide({username}) {
  return (
    <NavbarRightSideStyled className='right-side'>
    {/* <div className="admin-button">Admin Button</div> */}
    <Profile username={username}/>
  </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    /* .admin-button {
        background: lightblue;
    } */

    .profile {
        background: yellow;
    }
`;
