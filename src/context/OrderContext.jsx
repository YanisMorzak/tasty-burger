import { createContext } from "react";

export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    isAddSelected: true,
    setIsAddSelected: () => {},

    isEditTabSelected: false,
    setIsEditTabSelected: () => {},

    currentTabSelected: false,
    setCurrentTabSelected: () => {},

    products: [],
    setProducts: () => {},
    handleAddProduct: () => {},
    handleDelete: () => {},
})