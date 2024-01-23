import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import Total from './Total';
import { formatPrice } from '../../../../../utils/maths';
import BasketBody from './BasketBody';

export default function Basket() {
  return (
     <BasketStyled className="basket">
        <Total amountToPay={formatPrice(0)}/>
        <BasketBody />
        <div className="footer-basket">Codé avec ❤️ et React.JS</div>
     </BasketStyled> 
  )
}

const BasketStyled = styled.div`
   background: pink;
   display: flex;
   flex-direction: column;

   .footer-basket{
    height: 70px;
    background: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Italiana', sans-serif;
    font-weight: 500;
    font-size: ${theme.fonts.size.P1};

   }
  
`;
