import React, { useContext } from 'react'
import { styled } from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';

export default function AddForm() {
    const {handleAddProduct} = useContext(OrderContext)

    const newProduct = {
        id: new Date().getTime(),
        title: "coming soon",
        imageSource: "./../../../../public/images/coming-soon.png",
        price: 2.5
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddProduct(newProduct)
    }

  return (
    <AddFormStyled>
        <div className='image-preview'>image-preview</div>
        <div className='input-fields'>
            <input type="text" placeholder='Nom' />
            <input type="text" placeholder='Image URL' />
            <input type="text" placeholder='Prix' />
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
