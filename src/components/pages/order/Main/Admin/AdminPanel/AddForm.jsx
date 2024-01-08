import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';

export default function AddForm() {
    const {handleAddProduct} = useContext(OrderContext)
    const [title, setTitle] = useState("")
    const [imageSource, setImageSource] = useState("")
    const [price, setPrice] = useState(0)

    const newProduct = {
        id: new Date().getTime(),
        title: title,
        imageSource: imageSource,
        price: price,
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddProduct(newProduct)
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleImageChange = (e) => {
        setImageSource(e.target.value)
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

  return (
    <AddFormStyled>
        <div className='image-preview'>image-preview</div>
        <div className='input-fields'>
            <input value={title} type="text" placeholder='Nom' onChange={handleTitleChange}/>
            <input value={imageSource} type="text" placeholder='Image URL' onChange={handleImageChange}/>
            <input value={price ? price : ""} type="text" placeholder='Prix' onChange={handlePriceChange}/>
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
