import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel/AdminPanel';
import OrderContext from '../../../../../context/OrderContext';

export default function Admin() {
  const {isCollapse, setIsCollapse} = useContext(OrderContext)

  return (
    <AdminStyled className="admin">
      <AdminTabs isCollapse={isCollapse} setIsCollapse={setIsCollapse}/>
      {!isCollapse && <AdminPanel />}
    </AdminStyled>
  )
}
const AdminStyled = styled.div`
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
`;
