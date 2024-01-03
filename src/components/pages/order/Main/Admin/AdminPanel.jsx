import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import OrderContext from '../../../../../context/OrderContext';
import { tabsConfig, getTabSelected } from './TabsConfig';

export default function AdminPanel() {
  const {currentTabSelected } = useContext(OrderContext)

  const tabs = tabsConfig(currentTabSelected)
  const tabSelected = getTabSelected(tabs, currentTabSelected)

  return (
    <AdminPanelStyled>     
      {currentTabSelected === tabSelected.index && tabSelected.label}
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
