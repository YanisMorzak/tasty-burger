import React from 'react'
import BasketCard from './BasketCard'
import { styled } from 'styled-components';
import { IMAGE_BY_DEFAULT } from '../../../../../enums/product';


export default function BasketProduct({basket}) {
    
  return (
    <BasketProductStyled>
        {basket.map((basketProduct) => (
           <div className='basket-card' key={basketProduct.id}>
             <BasketCard price={basketProduct.price} imageSource={basketProduct.imageSource ? basketProduct.imageSource : IMAGE_BY_DEFAULT} title={basketProduct.title} quantity={basketProduct.quantity}/>
           </div>
        ))}
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
