import React, { useContext } from 'react'
import BasketCard from './BasketCard'
import { styled } from 'styled-components';
import { IMAGE_BY_DEFAULT } from '../../../../../enums/product';
import OrderContext from '../../../../../context/OrderContext';

export default function BasketProduct() {  

  const {basket, handleDeleteBasketProduct, products, isModeAdmin, setIsCollapse, setCurrentTabSelected, setproductSelected} = useContext(OrderContext)

  const handleClick = (idProduct) => { 
    if(!isModeAdmin) return

    setIsCollapse(false)
    setCurrentTabSelected("edit")

    const productClickedOn = products.find((product) => product.id === idProduct)
    setproductSelected(productClickedOn);
   }
    
  return (
    <BasketProductStyled>
        {basket.map((basketProduct) => {
          const menuProduct = products.find((product) => product.id === basketProduct.id)
          return (
           <div className='basket-card' key={basketProduct.id}>
             <BasketCard price={menuProduct.price} imageSource={menuProduct.imageSource ? menuProduct.imageSource : IMAGE_BY_DEFAULT} title={menuProduct.title} quantity={basketProduct.quantity} onDelete={(e) => handleDeleteBasketProduct(e, basketProduct.id)}  onClick={() => handleClick(basketProduct.id)} isModeAdmin={isModeAdmin}/>
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
