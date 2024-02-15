import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import OrderContext from '../../../../../context/OrderContext';
import BasketProduct from './BasketProduct';


export default function BasketBody() {
  const {basket} = useContext(OrderContext)
  const isBasketEmpty = basket.length === 0
  return (
    <BasketBodyStyled>
      {isBasketEmpty ? "Votre commande est vide." : <BasketProduct/>}
      
      </BasketBodyStyled>
  )
}

const BasketBodyStyled = styled.div`
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
    font-family: 'Italiana', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P3};
    font-weight: 700;
    color: ${theme.colors.greyBlue};
    overflow-y: scroll;
`;
