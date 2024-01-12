import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import OrderContext from '../../../../../../context/OrderContext';
import TextInput from '../../../../../reusable-ui/TextInput';
import Button from '../../../../../reusable-ui/Button';
import ImagePreview from './ImagePreview';
import SubmitMessage from './SubmitMessage';
import { getInputTextsConfig } from './inputTextConfig';

export const EMPTY_PRODUCT = {
  title: "",
  imageSource: "",
  price: 0,
  
}

export default function AddForm() {

    const {handleAddProduct, newProduct, setNewProduct} = useContext(OrderContext)

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

    const inputTexts = getInputTextsConfig(newProduct)
   
  return (
    <AddFormStyled onSubmit={handleSubmit}>
       <ImagePreview newProduct={newProduct}/>
        <div className='input-fields'>
          {inputTexts.map((input) => {
            return <TextInput 
            key={input.id}
            name={input.name} 
            value={input.value} 
            placeholder={input.placeholder}
            onChange={handleChange} 
            Icon={input.Icon} 
            version={input.version}
            />
          })}
           
        </div>
        <div className='submit-button'>
            <Button label={"Ajouter un nouveau produit au menu"} version="succes"/>
            {isSubmitted && <SubmitMessage />
            }
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

  .input-fields{
    grid-area: 1/2/4/3;
    display: grid;
    grid-row-gap: 8px;
  }
  .submit-button{
    grid-area: 4/2/5/3;
    display: flex;
    align-items: center;

  }
`;
