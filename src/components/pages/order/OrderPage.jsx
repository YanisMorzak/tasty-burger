import React, { useState } from 'react'
import { styled } from 'styled-components';
import NavBar from './NavBar/NavBar';
import Main from './Main/Main';
import { theme } from '../../../theme';
import OrderContext from '../../../context/OrderContext';



export default function OrderPage() {
    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [isEditTabSelected, setIsEditTabSelected] = useState(false)
    const [isAddSelected, setIsAddSelected] = useState(true)

    const orderContextValue = {
      isModeAdmin,
      setIsModeAdmin,

      isEditTabSelected,
      setIsEditTabSelected,

      isAddSelected,
      setIsAddSelected,
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


