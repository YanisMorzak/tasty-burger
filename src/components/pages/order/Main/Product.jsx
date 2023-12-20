import React from 'react'
import { styled } from 'styled-components';

export default function Product({imageSource, title, price}) {
  return (
    <ProductStyled className='produit'>
        <div className="image">
            <img src={imageSource} alt={title} />
        </div>
        <div className='info-text'>
            <div className='title'>{title}</div>
            <div className='description'>
                <div className='price'>{price}</div>
                <button className='add-button'>Ajouter</button>
        </div>
        </div>               
    </ProductStyled>
  )
}

const ProductStyled = styled.div`
        background: red;
        width: 240px;
        height: 330px;
        display: grid;
        grid-template-rows: 65% 1fr;
        box-sizing: border-box;
        padding: 20px 20px 10px 20px;

        .image{
            width: 100%;
            height: auto;
            border: 1px solid green;
            margin-top: 30px;
            
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

        .info-text{
            border: 1px solid blue;
        }
`;
