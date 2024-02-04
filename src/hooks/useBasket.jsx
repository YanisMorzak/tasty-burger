import { useState } from "react"
import {fakeBasket} from "../fakeData/fakeBasket"
import { deepClone } from "../utils/array"

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.EMPTY)

    const handleAddToBasket = (productToAdd) => {
        const basketCopy = deepClone(basket)
        const isProductAlreadyInBasket = basketCopy.find((product) => product.id === productToAdd.id)
    
        // 1er cas : le produit n'est pas déjà dans le basket
        if (!isProductAlreadyInBasket) {
          createNewProductInBasket(productToAdd, basketCopy, setBasket)
          return
        }
        // 2ème cas : le produit est déjà dans le basket
        incrementProductAlreadyInBasket(productToAdd, basketCopy)
      }
    
      const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
        const indexOfBasketProductToIncrement = basketCopy.findIndex((product) => product.id === productToAdd.id)
        basketCopy[indexOfBasketProductToIncrement].quantity += 1
        setBasket(basketCopy)
      }
    
      const createNewProductInBasket = (productToAdd, basketCopy, setBasket) => {
        const newBasketProduct = {
          ...productToAdd,
          quantity: 1,
        }
        const basketUpdated = [newBasketProduct, ...basketCopy]
        setBasket(basketUpdated)
      }

    return {basket, handleAddToBasket}
 }