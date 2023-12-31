import React from 'react'
import { styled } from 'styled-components';
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel';

export default function Admin() {
  return (
    <AdminStyled className="admin">
      <AdminTabs />
      <AdminPanel />
    </AdminStyled>
  )
}
const AdminStyled = styled.div`
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
`;
