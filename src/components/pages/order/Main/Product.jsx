import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../theme';
import Button from '../../../reusable-ui/Button'
import { TiDelete } from 'react-icons/ti';
import OrderContext from '../../../../context/OrderContext';

export default function Product({imageSource, title, leftDescription, onDelete}) {
    const {isModeAdmin} = useContext(OrderContext)

  return (
    <ProductStyled className='produit'>
       { isModeAdmin && <button className='delete-button' aria-label='delete-button' onClick={onDelete}>
            <TiDelete className='icon'/>
        </button>}
        <div className="image">
            <img src={imageSource} alt={title} />
        </div>
        <div className='info-text'>
            <div className='title'>{title}</div>
            <div className='description'>
                <div className='left-description'>{leftDescription}</div>
                <div className='right-description'> 
                <Button className="primary-button" label={"Ajouter"} version="normal" /></div>
        </div>
        </div>               
    </ProductStyled>
  )
}

const ProductStyled = styled.div`
        background: ${theme.colors.white};
        width: 240px;
        height: 330px;
        display: grid;
        grid-template-rows: 65% 1fr;
        box-sizing: border-box;
        padding: 20px 20px 10px 20px;
        box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
        border-radius: ${theme.borderRadius.extraRound};
        position: relative;

        .delete-button{
            position: absolute;
            top: 15px;
            right: 15px;
            width: 30px;
            height: 30px;
            color: ${theme.colors.primary};
            border: none;
            border-radius: 90px;
            background: none;
            cursor: pointer;

            .icon{
                height: 100%;
                width: 100%;
            }

            :hover{
                color: ${theme.colors.red};
                background: none;                
            }
            :active{
                color: ${theme.colors.primary};
            }

        }

        .image{
            width: 100%;
            height: auto;
            margin-top: 30px;
            margin-bottom: 20px;
            
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

        .info-text{
            display: grid;
            grid-template-rows: 30% 70%;
            padding: 5px;

            .title{               
                font-size: ${theme.fonts.size.P3};
                font-weight: ${theme.fonts.weights.bold};
                color: ${theme.colors.dark};
                position: relative;
                bottom: 10px;
                text-align: left;
                white-space: nowrap;
                 overflow: hidden;
                 width: 100%;
                text-overflow: ellipsis;
                font-family: 'Italiana', sans-serif;

            }

            .description{
                display: grid;
                grid-template-columns: 1fr 1fr;

                .left-description{
                    display: flex;
                    justify-content: flex-start;
                    align-content: center;
                    font-weight: ${theme.fonts.weights.medium};
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    padding-top: 25px;
                    font-weight: ${theme.fonts.weights.medium};
                    color: ${theme.colors.primary};
                }

                .right-description {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    font-size: ${theme.fonts.size.P1};

                    .primary-button {
                        font-size: ${theme.fonts.size.XS};
                        cursor: pointer;
                        padding: 12px;
        }
                }
            }
        }
`;
