import { useState } from "react"
import {fakeBasket} from "../fakeData/fakeBasket"
import { deepClone } from "../utils/array"

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.EMPTY)

    const handleAddToBasket = (idProductToAdd) => {
        const basketCopy = deepClone(basket)
        const isProductAlreadyInBasket = basketCopy.find((product) => product.id === idProductToAdd)
    
        // 1er cas : le produit n'est pas déjà dans le basket
        if (!isProductAlreadyInBasket) {
          createNewProductInBasket(idProductToAdd, basketCopy, setBasket)
          return
        }
        // 2ème cas : le produit est déjà dans le basket
        incrementProductAlreadyInBasket(idProductToAdd, basketCopy)
      }
    
      const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy) => {
        const indexOfBasketProductToIncrement = basketCopy.findIndex((product) => product.id === idProductToAdd)
        basketCopy[indexOfBasketProductToIncrement].quantity += 1
        setBasket(basketCopy)
      }
    
      const createNewProductInBasket = (idProductToAdd, basketCopy, setBasket) => {
         // we do not re-create a whole product, we only add the extra info a basket product has in comparison to a menu product
        const newBasketProduct = { id: idProductToAdd, quantity: 1 }
        const basketUpdated = [newBasketProduct, ...basketCopy]
        setBasket(basketUpdated)
      }

      const handleDeleteBasketProduct = (idBasketProduct) => { 
        const basketCopy = deepClone(basket)
    
        const basketUpdated = basketCopy.filter((product) => product.id !== idBasketProduct)
    
        setBasket(basketUpdated)
       }

    return {basket, handleAddToBasket, handleDeleteBasketProduct}
 }