import React, { useContext } from 'react'
import OrderContext from '../../../../../../context/OrderContext';
import { EMPTY_PRODUCT } from '../../../../../../enums/product';
import Form from './Form'
import Button from '../../../../../reusable-ui/Button';
import SubmitMessage from './SubmitMessage';
import { useSuccessMessage } from '../../../../../../hooks/useSuccessMessage';

export default function AddForm() {

    const {handleAddProduct, newProduct, setNewProduct} = useContext(OrderContext)
    const {isSubmitted, displaySuccessMessage} = useSuccessMessage()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID()
        }       
        handleAddProduct(newProductToAdd)
        setNewProduct(EMPTY_PRODUCT) 
        displaySuccessMessage()       
    }

    const handleChange = (e) => {
        const newValue = e.target.value
        const name = e.target.name
        setNewProduct({...newProduct, [name]: newValue})
    }
   
  return (
    <Form 
      onSubmit={handleSubmit} 
      onChange={handleChange} 
      product={newProduct} 
      isSubmitted={isSubmitted}
    >
      <>      
            <Button label={"Ajouter un nouveau produit au menu"} version="succes"/>
            {isSubmitted && <SubmitMessage />
            }   
      </>
    </Form>
  )
}

