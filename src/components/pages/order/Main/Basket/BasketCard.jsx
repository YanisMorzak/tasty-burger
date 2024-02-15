import React from 'react'
import { formatPrice } from '../../../../../utils/maths'
import { css, styled } from 'styled-components';
import { theme } from '../../../../../theme';
import { MdDeleteForever } from 'react-icons/md';

export default function BasketCard({price, imageSource, title, quantity, onDelete, onClick, isModeAdmin, isSelected}) {
  return (
    <BasketCardStyled  isModeAdmin={isModeAdmin} onClick={onClick} isSelected={isSelected}>
         <div className="delete-button" onClick={onDelete}>
        <MdDeleteForever className="icon" />
      </div>
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
cursor: ${({ isModeAdmin }) => (isModeAdmin ? "pointer" : "auto")};
  height: 86px;
  font-size: ${theme.fonts.size.P0};
  box-sizing: border-box;
  padding: 8px 16px;
  display: grid;
  grid-template-columns: 30% 1fr;

  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.cardBasket};

  position: relative;

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
        user-select: none;
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

    .delete-button {
    display: none;
    z-index: 1;
  }

  /* hover de la card */
  &:hover {
    .delete-button {
      /* border: 1px solid red; */
      border: none;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 76px;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;

      .icon {
        width: ${theme.fonts.size.P3};
        height: ${theme.fonts.size.P3};
      }

      /* behaviour on delete-button hover */
      &:hover {
        .icon {
          color: ${theme.colors.dark};
        }
        &:active {
          .icon {
            color: ${theme.colors.white};
          }
        }
      }
    }
  }

  ${({ isModeAdmin, isSelected }) => isModeAdmin && isSelected && selectedStyled}
    
`;

const selectedStyled = css`
  background: ${theme.colors.primary};

  .price,
  .quantity {
    color: ${theme.colors.white} !important;
  }
`


