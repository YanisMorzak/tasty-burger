import React from 'react'
import { styled } from 'styled-components';
import Tabs from '../../../../reusable-ui/Tabs';
import {FiChevronDown, FiChevronUp} from "react-icons/fi"

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
        <Tabs Icon={<FiChevronDown />}/>
    </AdminTabsStyled>
  )
}
const AdminTabsStyled = styled.div`
  padding: 0 30px;
`;
