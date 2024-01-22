import React, { children } from 'react'
import { styled } from 'styled-components';
import TextInput from '../../../../../reusable-ui/TextInput';
import ImagePreview from './ImagePreview';
import { getInputTextsConfig } from './inputTextConfig';

export default function Form({onSubmit, onChange, product, children}) {

    const inputTexts = getInputTextsConfig(product)
   
  return (
    <FormStyled onSubmit={onSubmit}>
       <ImagePreview newProduct={product}/>
        <div className='input-fields'>
          {inputTexts.map((input) => {
            return <TextInput 
            key={input.id}
            name={input.name} 
            value={input.value} 
            placeholder={input.placeholder}
            onChange={onChange} 
            Icon={input.Icon} 
            version={input.version}
            />
          })}
           
        </div>
       <div className='form-footer'>{children}</div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
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
  .form-footer{
    grid-area: 4/2/5/3;
    display: flex;
    align-items: center;
  }
`;
