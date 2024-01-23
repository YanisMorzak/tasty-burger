import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../theme';

export default function Basket() {
  return (
     <BasketStyled className="basket">
        <div className="head">Head</div>
        <div className="main-basket">Main</div>
        <div className="footer-basket">Footer</div>
     </BasketStyled> 
  )
}

const BasketStyled = styled.div`
   background: pink;
   display: flex;
   flex-direction: column;

   .head{
    height: 70px;
    background: ${theme.colors.background_dark};
   }
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
