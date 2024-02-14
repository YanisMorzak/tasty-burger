import React from 'react'
import BasketCard from './BasketCard'
import { styled } from 'styled-components';
import { IMAGE_BY_DEFAULT } from '../../../../../enums/product';

export default function BasketProduct({basket, handleDeleteBasketProduct, products}) {  
    
  return (
    <BasketProductStyled>
        {basket.map((basketProduct) => {
          const menuProduct = products.find((product) => product.id === basketProduct.id)
          return (
           <div className='basket-card' key={basketProduct.id}>
             <BasketCard price={menuProduct.price} imageSource={menuProduct.imageSource ? menuProduct.imageSource : IMAGE_BY_DEFAULT} title={menuProduct.title} quantity={basketProduct.quantity} onDelete={() => handleDeleteBasketProduct(basketProduct.id)}/>
           </div>
        )})}
    </BasketProductStyled>
  )
}

const BasketProductStyled = styled.div`
  height: 100%;

  .basket-card{
    margin: 10px 16px;
    box-sizing: border-box;
   
  }
`;
