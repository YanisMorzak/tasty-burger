import React from 'react'
import { styled } from 'styled-components';
import TextInput from '../../../../../reusable-ui/TextInput';
import Button from '../../../../../reusable-ui/Button';
import ImagePreview from './ImagePreview';
import SubmitMessage from './SubmitMessage';
import { getInputTextsConfig } from './inputTextConfig';
import { theme } from '../../../../../../theme';

export default function Form({onSubmit, onChange, product, isSubmitted}) {

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
       { onSubmit ? <div className='submit-button'>
            <Button label={"Ajouter un nouveau produit au menu"} version="succes"/>
            {isSubmitted && <SubmitMessage />
            }
        </div> : <div className='sentence'>Cliquer sur un produit du menu pour le modifier en temps réel</div>}
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
  .submit-button{
    grid-area: 4/2/5/3;
    display: flex;
    align-items: center;

  }
  .sentence{
    grid-area: 4/2/5/3;
    display: flex;
    align-items: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.SM};

  }
`;
