import React, { useState } from 'react'
import { styled } from 'styled-components';
import Profile from './Profile';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import { toast } from 'react-toastify';
import ToastAdmin from './ToastAdmin';

export default function NavbarRightSide({username}) {

  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const displayToastNotification = () => {
    if(!isModeAdmin) {
    toast.info("Mode admin activé", {
    theme: "dark",
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })}
  setIsModeAdmin(!isModeAdmin)
}
  return (
    <NavbarRightSideStyled>
      <ToggleButton labelIfUnchecked="ACTIVER LE MODE ADMIN" labelIfChecked="DESACTIVER LE MODE ADMIN" onToggle={displayToastNotification} />
    <Profile username={username}/>
    <ToastAdmin />
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
