import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';


export default function AddForm() {

    const EMPTY_PRODUCT = {
        title: "",
        imageSource: "",
        price: 0,
        
      }

    const {handleAddProduct} = useContext(OrderContext)

    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID()
        }       
        handleAddProduct(newProductToAdd)
        setNewProduct(EMPTY_PRODUCT)
    }

    const handleChange = (e) => {
        const newValue = e.target.value
        const name = e.target.name
        setNewProduct({...newProduct, [name]: newValue})
    }

  return (
    <AddFormStyled>
        <div className='image-preview'>
           {newProduct.imageSource ? <img src={newProduct.imageSource} alt={newProduct.title} /> : <div>image-preview</div>}
        </div>
        <div className='input-fields'>
            <input name="title" value={newProduct.title} type="text" placeholder='Nom du produit (ex: Super Burger)' onChange={handleChange}/>
            <input name="imageSource" value={newProduct.imageSource} type="text" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" onChange={handleChange}/>
            <input name="price" value={newProduct.price ? newProduct.price : ""} type="text" placeholder='Prix' onChange={handleChange}/>
        </div>
        <button onClick={handleSubmit} className='submit-button'>submit-button</button>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.div`
  border: 2px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
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
  }
  .input-fields{
    grid-area: 1/2/4/3;
    display: grid;

    input{
        padding: 10px;
    }
  }
  .submit-button{
    background: green;
    grid-area: 4/2/5/3;
    width: 50%;
  }
`;
