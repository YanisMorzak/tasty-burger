import React, { useState } from 'react'
import { styled } from 'styled-components';
import NavBar from './NavBar/NavBar';
import Main from './Main/Main';
import { theme } from '../../../theme';
import OrderContext from '../../../context/OrderContext';
import { EMPTY_PRODUCT } from '../../../enums/product';
import { useProduct } from '../../../hooks/useProduct';


export default function OrderPage() {
    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [currentTabSelected, setCurrentTabSelected] = useState("add");
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    const [isCollapse, setIsCollapse] = useState(false)
    const [productSelected, setproductSelected] = useState(EMPTY_PRODUCT)
    const {handleAddProduct, handleDelete, handleEdit, resetProducts, products} = useProduct()

    const orderContextValue = {
      isModeAdmin,
      setIsModeAdmin,

      currentTabSelected,
      setCurrentTabSelected,

      isCollapse,
      setIsCollapse,

      products,
    
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


