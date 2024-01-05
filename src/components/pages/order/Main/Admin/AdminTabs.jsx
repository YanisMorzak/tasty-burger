import React, { useContext } from 'react'
import { styled } from 'styled-components';
import Tabs from '../../../../reusable-ui/Tabs';
import {FiChevronDown, FiChevronUp} from "react-icons/fi"
import { theme } from '../../../../../theme';
import OrderContext from '../../../../../context/OrderContext';
import { tabsConfig } from './TabsConfig';

export default function AdminTabs({isCollapse, setIsCollapse}) {
    const {currentTabSelected, setCurrentTabSelected} = useContext(OrderContext)

    const handleClick = () => {
        setIsCollapse(!isCollapse)
    }

    const selectTab = (tabSelected) => {
        setIsCollapse(false) //ouvrir le panel quoiqu'il arrive
        setCurrentTabSelected(tabSelected)//réactualise l'onglet sélectionner en fonction de la valeur de l'index
    }

    const tabs = tabsConfig(currentTabSelected)

  return (
    <AdminTabsStyled>
        <Tabs 
            Icon={ isCollapse ? <FiChevronUp /> : <FiChevronDown/>} 
            onClick={ () => handleClick() }
            className= {isCollapse ? "is-active" : ""} />

        {tabs.map((tab) => {
            return (
                <Tabs 
                    key={tab.id}
                    label={tab.label}
                    Icon={tab.Icon}
                    onClick={() => selectTab(tab.index)}
                    className={tab.className}
                />
            )
        })}
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
