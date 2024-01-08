import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';

export default function AddForm() {

    const EMPTY_PRODUCT = {
        id: new Date().getTime(),
        title: "",
        imageSource: "",
        price: 0,
      }

    const {handleAddProduct} = useContext(OrderContext)

    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddProduct(newProduct)
    }

    const handleChange = (e) => {
        const newValue = e.target.value
        const name = e.target.name
        setNewProduct({...newProduct, [name]: newValue})
    }

  return (
    <AddFormStyled>
        <div className='image-preview'>image-preview</div>
        <div className='input-fields'>
            <input name="title" value={newProduct.title} type="text" placeholder='Nom' onChange={handleChange}/>
            <input name="imageSource" value={newProduct.imageSource} type="text" placeholder='Image URL' onChange={handleChange}/>
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
    background: red;
    grid-area: 1/1/4/2;
  }
  .input-fields{
    background: blue;
    grid-area: 1/2/4/3;
    display: grid;
  }
  .submit-button{
    background: green;
    grid-area: 4/2/5/3;
    width: 50%;
  }
`;
