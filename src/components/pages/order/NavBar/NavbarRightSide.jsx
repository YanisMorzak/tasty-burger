import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components';
import Profile from './Profile';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { theme } from '../../../../theme';

export default function NavbarRightSide({username}) {

  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const displayToastNotification = () => {
    if(isModeAdmin) {
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
    <ToastContainer className="toaster" bodyClassName="body-toast"/>
  </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    /* .admin-button {
        background: lightblue;
    } */
    .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }

`;
