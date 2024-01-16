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

    isCollapse: false,
setIsCollapse: () => {},

    products: [],
    setProducts: () => {},
    handleAddProduct: () => {},
    handleDelete: () => {},
    resetProducts: () => {},
    newProduct: [],
    setNewProduct: () => {},

    productSelected: {}, 
    setproductSelected: () => {},
})