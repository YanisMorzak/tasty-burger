import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import Product from '../Product';
import { formatPrice } from '../../../../../utils/maths'
import OrderContext from '../../../../../context/OrderContext';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import EmptyMenuClient from './EmptyMenuClient';
import { EMPTY_PRODUCT, IMAGE_BY_DEFAULT } from '../../../../../enums/product';

export default function Menu() {

  const {products, handleDelete, resetProducts, isModeAdmin, setproductSelected, productSelected, setIsCollapse, setCurrentTabSelected} = useContext(OrderContext)

  if(products.length === 0)
    return(
    isModeAdmin ? <EmptyMenuAdmin resetProducts={resetProducts}/> : <EmptyMenuClient />
    )
    
    //gestionnaire d'évènement (event handlers)
    const handleClick = (idProduct) => {
      if(!isModeAdmin) return

      setIsCollapse(false)
      setCurrentTabSelected("edit")

      const productClickedOn = products.find((product) => product.id === idProduct)
      setproductSelected(productClickedOn);
    }

    const handleCardDelete = (e, idProductToDelete) => { 
      e.stopPropagation()
      handleDelete(idProductToDelete)
      productSelected.id == idProductToDelete ? setproductSelected(EMPTY_PRODUCT) : null
     }

    const checkedIfProductIsClicked = (idMenu, idClickedOn) => { 
      return idMenu === idClickedOn ? true : false
     }

  return (
    <MenuStyled className="menu">
        {products.map((produit) => {
            return (
            <Product key={produit.id} imageSource={produit.imageSource ? produit.imageSource : IMAGE_BY_DEFAULT} title={produit.title} leftDescription={formatPrice(produit.price)} 
            onDelete={(e) => handleCardDelete(e, produit.id)} onClick={() => handleClick(produit.id)}
            isHoverable={isModeAdmin}
            isSelected={isModeAdmin && checkedIfProductIsClicked(produit.id, productSelected.id)} />
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
