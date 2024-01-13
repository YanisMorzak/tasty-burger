import {AiOutlinePlus} from "react-icons/ai"
import {MdModeEditOutline} from "react-icons/md"
import AddForm from "./AdminPanel/AddForm"
import EditForm from "./AdminPanel/EditForm"

export const tabsConfig = (currentTabSelected) => [
  
    {
        index: "add",
        label:"Ajouter un produit",
        id: 1,
        Icon: <AiOutlinePlus />  ,
        className: currentTabSelected === "add" ? "is-active" : "",
        Content: <AddForm />
    },
    {
        index: "edit",
        label:"Modifier un produit",
        id: 2,
        Icon: <MdModeEditOutline />  ,
        className: currentTabSelected ==="edit" ? "is-active" : "",
        Content: <EditForm />
    }
]

export const getTabSelected = (tabs, currentTabSelected) => 
    tabs.find((tab) => tab.index === currentTabSelected)

