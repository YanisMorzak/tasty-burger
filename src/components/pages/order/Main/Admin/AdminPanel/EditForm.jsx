import React, { useContext } from 'react'
import HintMessage from './HintMessage'
import OrderContext from '../../../../../../context/OrderContext'
import { styled } from 'styled-components'
import ImagePreview from './ImagePreview'
import TextInput from '../../../../../reusable-ui/TextInput'
import { getInputTextsConfig } from './inputTextConfig'

export default function EditForm() {
  const {productSelected, setproductSelected} = useContext(OrderContext)

  const handleChange = (e) => {
    const newValue = e.target.value
    const name = e.target.name
    setproductSelected({...productSelected, [name]: newValue})
}

const inputTexts = getInputTextsConfig(productSelected)

  return (
    <AddEditStyled>
       <ImagePreview newProduct={productSelected}/>
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
    </AddEditStyled>
  )
}

const AddEditStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 8px;
  height: 100%;
  width: 70%;
  margin-left: 20px;

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

