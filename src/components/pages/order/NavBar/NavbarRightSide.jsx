import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import Profile from './Profile';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import { toast } from 'react-toastify';
import ToastAdmin from './ToastAdmin';
import OrderContext from '../../../../context/OrderContext';

export default function NavbarRightSide() {
  // const [isModeAdmin, setIsModeAdmin] = useState(true);
  const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext)

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
      <ToggleButton labelIfUnchecked="ACTIVER LE MODE ADMIN" labelIfChecked="DESACTIVER LE MODE ADMIN" onToggle={displayToastNotification} isChecked={isModeAdmin}/>
    <Profile />
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
