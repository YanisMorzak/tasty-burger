import {AiOutlinePlus} from "react-icons/ai"
import {MdModeEditOutline} from "react-icons/md"

export const tabsConfig = (currentTabSelected) => [
  
    {
        index: "add",
        label:"Ajouter un produit",
        id: 2,
        Icon: <AiOutlinePlus />  ,
        onClick: () => selectTab("add") ,
        className: currentTabSelected === "add" ? "is-active" : "",
    },
    {
        index: "edit",
        label:"Modifier un produit",
        id: 3,
        Icon: <MdModeEditOutline />  ,
        onClick: () => selectTab("edit") ,
        className: currentTabSelected ==="edit" ? "is-active" : "",
    }
]
