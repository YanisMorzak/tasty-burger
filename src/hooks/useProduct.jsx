import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone } from "../utils/array"
import { syncBothMenu } from "../api/product"

export const useProduct = () => { 
    const [products, setProducts] = useState()

    //gestionnaire de state (state handlers)
    const handleAddProduct = (newProduct, username) => {
        // copie du state
        const copyProducts = deepClone(products)
  
        // manipulation de la copie
        const productsUpdated = [newProduct,...copyProducts]
  
        // update du state
        setProducts(productsUpdated)
        syncBothMenu(username, productsUpdated)
        
      }
  
      const handleDelete = (idOfProductDeleted, username) => {
        const productsCopy = deepClone(products)
    
        const productsUpdated = productsCopy.filter((product) => product.id !== idOfProductDeleted)
    
        setProducts(productsUpdated)
        syncBothMenu(username, productsUpdated)
      }
  
      const handleEdit = (productBeingUpdated) => {
        // Copie du state (deep clone)
        const copyProducts = deepClone(products)
        
        //Manipulation de la copie du state
        const indexOfProductToEdit = products.findIndex((product) => product.id === productBeingUpdated.id)
  
        copyProducts[indexOfProductToEdit] = productBeingUpdated
  
        //Update du state
        setProducts(copyProducts)
      }
  
      const resetProducts = () => {
        setProducts(fakeMenu.LARGE)
      }

      return {handleAddProduct, handleDelete, handleEdit, resetProducts, products, setProducts}
 }