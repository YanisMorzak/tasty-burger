import React, { useContext } from 'react'
import { styled } from 'styled-components';
import Tabs from '../../../../reusable-ui/Tabs';
import {FiChevronDown, FiChevronUp} from "react-icons/fi"
import {AiOutlinePlus} from "react-icons/ai"
import {MdModeEditOutline} from "react-icons/md"
import { theme } from '../../../../../theme';
import OrderContext from '../../../../../context/OrderContext';

export default function AdminTabs({isCollapse, setIsCollapse}) {
    const {isAddSelected, setIsAddSelected, isEditTabSelected, setIsEditTabSelected} = useContext(OrderContext)

    const handleClick = () => {
        setIsCollapse(!isCollapse)
    }

    const selectTab = (tabSelected) => {
        setIsCollapse(false)

        if(tabSelected === "add"){
            setIsAddSelected(true)
            setIsEditTabSelected(false)  
        }
        if(tabSelected === "edit"){
            setIsEditTabSelected(true)
            setIsAddSelected(false)
        }

    }

    const tabsConfig = [
        {
            label:"",
            Icon: isCollapse ? <FiChevronUp /> : <FiChevronDown/> ,
            onClick: () => handleClick() ,
            className: isCollapse ? "is-active" : "",
        },
        {
            label:"Ajouter un produit",
            Icon: <AiOutlinePlus />  ,
            onClick: () => selectTab("add") ,
            className: isAddSelected ? "is-active" : "",
        },
        {
            label:"Modifier un produit",
            Icon: <MdModeEditOutline />  ,
            onClick: () => selectTab("edit") ,
            className: isEditTabSelected ? "is-active" : "",
        }
    ]

  return (
    <AdminTabsStyled>
        {tabsConfig.map((tab) => {
            return (
                <Tabs 
                    label={tab.label}
                    Icon={tab.Icon}
                    onClick={tab.onClick}
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
