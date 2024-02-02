import React from 'react'
import { formatPrice } from '../../../../../utils/maths'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';

export default function BasketCard({price, imageSource, title, quantity}) {
  return (
    <BasketCardStyled>
        <div className="image">
            <img src={imageSource} alt="" />
        </div>
        <div className="text-info">
            <div className="left-info">
                <div className='title'>
                    <span>{title}</span>
                </div>
                <div className="price">
                    <span>{formatPrice(price)}</span>
                </div>
            
            </div>
            <div className="quantity">
                <span>X {quantity}</span>
            </div>
           
        </div>
        
    </BasketCardStyled>
  )
}
const BasketCardStyled = styled.div` 
  height: 86px;
  font-size: ${theme.fonts.size.P0};
  box-sizing: border-box;
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 30% 1fr;

  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.cardBasket};

  .image {
    box-sizing: border-box;
    height: 70px;
    /* border: 1px solid red; */
    img {
      padding: 5px;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
    .text-info{
        margin-left: 20px;
        display: grid;
        grid-template-columns: 70% 1fr;

        .left-info{
            display: grid;
      grid-template-rows: 60% 40%;

      .title {
        display: flex;
        align-items: center;
        font-size: ${theme.fonts.size.P1};
        color: ${theme.colors.dark}; 
        min-width: 0;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        }
        .price{
            color: ${theme.colors.primary};
            font-weight: ${theme.fonts.weights.light};
            font-size: ${theme.fonts.size.SM};
        }
        }

        .quantity{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: ${theme.colors.primary};
            font-weight: ${theme.fonts.weights.light};
            font-size: ${theme.fonts.size.XS};
        }
    }
    
`;


