import React from 'react'
import { styled } from 'styled-components';
import Tabs from '../../../../reusable-ui/Tabs';
import {FiChevronDown, FiChevronUp} from "react-icons/fi"
import {AiOutlinePlus} from "react-icons/ai"
import { theme } from '../../../../../theme';

export default function AdminTabs({isCollapse, setIsCollapse}) {

    const handleClick = () => {
        setIsCollapse(!isCollapse)
    }
  return (
    <AdminTabsStyled>
        <Tabs label="" Icon={isCollapse ? <FiChevronUp /> : <FiChevronDown/>} onClick={handleClick} className={isCollapse ? "is-active" : ""}/>

        <Tabs 
        label={"Ajouter un produit"} 
        Icon={<AiOutlinePlus /> } 
        onClick={handleClick} 
        className={isCollapse ? "is-active" : ""}/>
    </AdminTabsStyled>
  )
}
const AdminTabsStyled = styled.div`
  padding: 0 30px;
  display: flex;

  .is-active{
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  button{
    margin-left: 1px;
  }
`;
