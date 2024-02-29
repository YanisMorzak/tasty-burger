import { useState } from "react"
import {fakeBasket} from "../fakeData/fakeBasket"
import { deepClone } from "../utils/array"
import { setLocalStorage } from "../utils/window"

export const useBasket = () => { 
    const [basket, setBasket] = useState([])

    const handleAddToBasket = (idProductToAdd, username) => {
        const basketCopy = deepClone(basket)
        const isProductAlreadyInBasket = basketCopy.find((product) => product.id === idProductToAdd)
    
        // 1er cas : le produit n'est pas déjà dans le basket
        if (!isProductAlreadyInBasket) {
          createNewProductInBasket(idProductToAdd, basketCopy, setBasket, username)
          return
        }
        // 2ème cas : le produit est déjà dans le basket
        incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username)
      }
    
      const incrementProductAlreadyInBasket = (idProductToAdd, basketCopy, username) => {
        const indexOfBasketProductToIncrement = basketCopy.findIndex((product) => product.id === idProductToAdd)
        basketCopy[indexOfBasketProductToIncrement].quantity += 1
        setBasket(basketCopy)
        setLocalStorage(username, basketCopy)
      }
    
      const createNewProductInBasket = (idProductToAdd, basketCopy, setBasket, username) => {
         // we do not re-create a whole product, we only add the extra info a basket product has in comparison to a menu product
        const newBasketProduct = { id: idProductToAdd, quantity: 1 }
        const basketUpdated = [newBasketProduct, ...basketCopy]
        setBasket(basketUpdated)
        setLocalStorage(username, basketUpdated)
      }

      const handleDeleteBasketProduct = (e, idBasketProduct) => { 
        e.stopPropagation()
        const basketCopy = deepClone(basket)
    
        const basketUpdated = basketCopy.filter((product) => product.id !== idBasketProduct)
    
        setBasket(basketUpdated)
       }

    return {basket, setBasket, handleAddToBasket, handleDeleteBasketProduct}
 }