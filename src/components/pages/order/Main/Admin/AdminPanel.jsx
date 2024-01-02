import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import OrderContext from '../../../../../context/OrderContext';

export default function AdminPanel() {
  const {currentTabSelected } = useContext(OrderContext)

  return (
    <AdminPanelStyled>
      {currentTabSelected === "add" && <input placeholder='ajouter un produit'/>}
      {currentTabSelected === "edit" && <input placeholder='modifier un produit'/>}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
border: 1px solid blue;
height: 250px;
background: ${theme.colors.white};
border: 1px solid ${theme.colors.greyLight};
box-shadow: ${theme.shadows.subtle};
  
`;
