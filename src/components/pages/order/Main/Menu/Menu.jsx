import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import Product from '../Product';
import { formatPrice } from '../../../../../utils/maths'
import OrderContext from '../../../../../context/OrderContext';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import EmptyMenuClient from './EmptyMenuClient';

const IMAGE_BY_DEFAULT = "/images/coming-soon.png";

export default function Menu() {

  const {products, handleDelete, resetProducts, isModeAdmin} = useContext(OrderContext)

  if(products.length === 0)
    return(
    isModeAdmin ? <EmptyMenuAdmin resetProducts={resetProducts}/> : <EmptyMenuClient />
    )

  return (
    <MenuStyled className="menu">
        {products.map((produit) => {
            return (
            <Product key={produit.id} imageSource={produit.imageSource ? produit.imageSource : IMAGE_BY_DEFAULT} title={produit.title} leftDescription={formatPrice(produit.price)} 
            onDelete={() => handleDelete(produit.id)}/>
            )
        })}
        </MenuStyled>
  )
}
const MenuStyled = styled.div`
    background: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    overflow-y: scroll;
`;