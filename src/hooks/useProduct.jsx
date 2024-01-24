import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeMenu"
import { deepClone } from "../utils/array"

export const useProduct = () => { 
    const [products, setProducts] = useState(fakeMenu.LARGE)

    //gestionnaire de state (state handlers)
    const handleAddProduct = (newProduct) => {
        // copie du state
        const copyProducts = deepClone(products)
  
        // manipulation de la copie
        const productsUpdated = [newProduct,...copyProducts]
  
        // update du state
        setProducts(productsUpdated)
      }
  
      const handleDelete = (idOfProductDeleted) => {
        const productsCopy = deepClone(products)
    
        const productsUpdated = productsCopy.filter((product) => product.id !== idOfProductDeleted)
    
        setProducts(productsUpdated)
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

      return {handleAddProduct, handleDelete, handleEdit, resetProducts, products}
 }