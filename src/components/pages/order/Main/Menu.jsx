import React, { useState } from 'react'
import { styled } from 'styled-components';
import { fakeMenu2 } from '../../../../fakeData/fakeMenu';
import { theme } from '../../../../theme';
import Product from './Product';
import { formatPrice } from '../../../../utils/maths'

export default function Menu() {
    const [products, setProducts] = useState(fakeMenu2)
  return (
    <MenuStyled className="menu">
        {products.map((produit) => {
            return (
            <Product key={produit.id} imageSource={produit.imageSource} title={produit.title} leftDescription={formatPrice(produit.price)}/>
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
    max-height: 400px;

`;
