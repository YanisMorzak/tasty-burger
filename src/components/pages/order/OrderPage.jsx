import React, { useState } from 'react'
import { styled } from 'styled-components';
import NavBar from './NavBar/NavBar';
import Main from './Main/Main';
import { theme } from '../../../theme';
import OrderContext from '../../../context/OrderContext';
import { fakeMenu } from '../../../fakeData/fakeMenu';
import { EMPTY_PRODUCT } from '../../../enums/product';
import { deepClone } from '../../../utils/array';


export default function OrderPage() {
    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [currentTabSelected, setCurrentTabSelected] = useState("add");
    const [products, setProducts] = useState(fakeMenu.LARGE)
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    const [isCollapse, setIsCollapse] = useState(false)
    const [productSelected, setproductSelected] = useState(EMPTY_PRODUCT)

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

    const orderContextValue = {
      isModeAdmin,
      setIsModeAdmin,

      currentTabSelected,
      setCurrentTabSelected,

      isCollapse,
      setIsCollapse,

      products,
      setProducts,
      handleAddProduct,
      handleDelete,
      handleEdit,
      resetProducts,
      newProduct,
      setNewProduct,

      productSelected, 
      setproductSelected,
    }


  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className='container'>
          <NavBar />
          <Main />
        </div>         
      </OrderPageStyled>
    </OrderContext.Provider>
  )
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }

`;


