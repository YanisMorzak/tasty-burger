import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components';
import Profile from './Profile';
import ToggleButton from '../../../reusable-ui/ToggleButton';

export default function NavbarRightSide({username}) {
  return (
    <NavbarRightSideStyled className='right-side'>
      <ToggleButton labelIfUnchecked="ACTIVER LE MODE ADMIN" labelIfChecked="DESACTIVER LE MODE ADMIN" />
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

`;
