import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';
import { FiCheck } from 'react-icons/fi';
import { theme } from '../../../../../../theme';
import TextInput from '../../../../../reusable-ui/TextInput';
import { BsFillCameraFill } from 'react-icons/bs';
import { MdOutlineEuro } from 'react-icons/md';
import { FaHamburger } from 'react-icons/fa';
import Button from '../../../../../reusable-ui/Button';


export default function AddForm() {

    const EMPTY_PRODUCT = {
        title: "",
        imageSource: "",
        price: 0,
        
      }

    const {handleAddProduct} = useContext(OrderContext)

    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
    const [isSubmitted, setisSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID()
        }       
        handleAddProduct(newProductToAdd)
        setNewProduct(EMPTY_PRODUCT)

        setisSubmitted(true)
        setTimeout(() => {
            setisSubmitted(false)
        }, 2000)
        
    }

    const handleChange = (e) => {
        const newValue = e.target.value
        const name = e.target.name
        setNewProduct({...newProduct, [name]: newValue})
    }

  return (
    <AddFormStyled onSubmit={handleSubmit}>
        <div className='image-preview'>
           {newProduct.imageSource ? <img src={newProduct.imageSource} alt={newProduct.title} /> : <div className='empty-image'>image-preview</div>}
        </div>
        <div className='input-fields'>
            <TextInput name="title" value={newProduct.title} type="text" placeholder='Nom du produit (ex: Super Burger)' onChange={handleChange} Icon={ <FaHamburger />} version="minimalist"/>
            <TextInput name="imageSource" value={newProduct.imageSource} type="text" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" onChange={handleChange} Icon={<BsFillCameraFill/>} version="minimalist"/>
            <TextInput name="price" value={newProduct.price ? newProduct.price : ""} type="text" placeholder='Prix' onChange={handleChange} Icon={<MdOutlineEuro />} version="minimalist"/>
        </div>
        <div className='submit-button'>
            <Button label={"Ajouter un nouveau produit au menu"} version="succes"/>
            {isSubmitted && 
            <div className='submit-message'>
                <FiCheck />
                <span>Ajouté avec succès !</span>
            </div>}
        </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 8px;
  height: 100%;
  width: 70%;

  .image-preview{
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
  }
  .input-fields{
    grid-area: 1/2/4/3;
    display: grid;
    grid-row-gap: 8px;
  }
  .submit-button{
    grid-area: 4/2/5/3;
    display: flex;
/* 
    button{
        width: 50%;
        margin-right: 10px;
    } */
  }
`;
