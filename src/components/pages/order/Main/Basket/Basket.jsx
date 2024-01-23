import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import Total from './Total';
import { formatPrice } from '../../../../../utils/maths';

export default function Basket() {
  return (
     <BasketStyled className="basket">
        <Total amountToPay={formatPrice(0)}/>
        <div className="main-basket">Main</div>
        <div className="footer-basket">Footer</div>
     </BasketStyled> 
  )
}

const BasketStyled = styled.div`
   background: pink;
   display: flex;
   flex-direction: column;

   .main-basket{
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
   }
   .footer-basket{
    height: 70px;
    background: ${theme.colors.background_dark};
   }
  
`;
