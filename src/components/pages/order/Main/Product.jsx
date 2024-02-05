import React, { useContext } from 'react'
import { css, styled } from 'styled-components';
import { theme } from '../../../../theme';
import Button from '../../../reusable-ui/Button'
import { TiDelete } from 'react-icons/ti';
import OrderContext from '../../../../context/OrderContext';


export default function Product({imageSource, title, leftDescription, onDelete, onClick, isHoverable, isSelected, handleCardDelete, onAdd}) {
    const {isModeAdmin} = useContext(OrderContext)

  return (
    <ProductStyled className='produit' onClick={onClick} isHoverable={isHoverable} isSelected={isSelected}>
    <div className='card'>
           { isModeAdmin && <button className='delete-button' aria-label='delete-button' onClick={onDelete} handleCardDelete={handleCardDelete}>
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
                    <Button className="primary-button" label={"Ajouter"} version="normal" onClick={onAdd}/></div>
            </div>
            </div>   
    </div>            
    </ProductStyled>
  )
}

const ProductStyled = styled.div`

.card{        
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

            &:hover{
                color: ${theme.colors.red};
                background: none;                
            }
            &:active{
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
        ${(props) => props.isHoverable && hoverableStyle}
        ${(props) => props.isSelected && selectedStyle}        
        }
`;

const hoverableStyle = css`
&:hover{
    box-sizing: border-box;
    width: 240px;
    height: 330px;
    transform: scale(1.04);
    transition: 0.4s;
    box-shadow: ${theme.shadows.orange};
    border-radius: ${theme.borderRadius.extraRound};
    cursor: pointer;
    }`

const selectedStyle = css`
background: ${theme.colors.primary};

.delete-button{
    color: ${theme.colors.white};

    &:active{
        color: ${theme.colors.white};
    }
}
.info-text{
    .description{   
        .left-description{
        color: ${theme.colors.white};
        }
    }
}
.primary-button{
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
}
`
