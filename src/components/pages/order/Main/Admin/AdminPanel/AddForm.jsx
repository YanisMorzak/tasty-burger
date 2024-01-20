import React, { useContext, useState } from 'react'
import OrderContext from '../../../../../../context/OrderContext';
import { EMPTY_PRODUCT } from '../../../../../../enums/product';
import Form from './Form'
import Button from '../../../../../reusable-ui/Button';
import SubmitMessage from './SubmitMessage';

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
   
  return (
    <Form 
      onSubmit={handleSubmit} 
      onChange={handleChange} 
      product={newProduct} 
      isSubmitted={isSubmitted}
    >
      <> 
      <div className='submit-button'>
            <Button label={"Ajouter un nouveau produit au menu"} version="succes"/>
            {isSubmitted && <SubmitMessage />
            }
        </div>
      </>
    </Form>
  )
}

