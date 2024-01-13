import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../../theme';

export default function ImagePreview({newProduct}) {
  return (
    <ImagePreviewStyled >
    {newProduct.imageSource ? <img src={newProduct.imageSource} alt={newProduct.title} /> : <div className='empty-image'>image-preview</div>}
 </ImagePreviewStyled>
  )
}
const ImagePreviewStyled = styled.div`
    grid-area: 1/1/4/2;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        height: 100%;
        width: 100%;
        object-fit: contain;

    }
    .empty-image{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${theme.colors.greyLight};
        border-radius: ${theme.borderRadius.round};
    } 
`;