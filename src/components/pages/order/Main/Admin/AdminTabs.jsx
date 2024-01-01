import React from 'react'
import { styled } from 'styled-components';
import Tabs from '../../../../reusable-ui/Tabs';
import {FiChevronDown, FiChevronUp} from "react-icons/fi"
import { theme } from '../../../../../theme';

export default function AdminTabs({isCollapse, setIsCollapse}) {

    const handleClick = () => {
        setIsCollapse(!isCollapse)
    }
  return (
    <AdminTabsStyled>
        <Tabs Icon={isCollapse ? <FiChevronUp /> : <FiChevronDown/>} onClick={handleClick} className={isCollapse ? "is-active" : ""}/>
    </AdminTabsStyled>
  )
}
const AdminTabsStyled = styled.div`
  padding: 0 30px;

  .is-active{
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }
`;
