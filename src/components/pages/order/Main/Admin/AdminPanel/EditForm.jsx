import React, { useContext, useState } from 'react'
import OrderContext from '../../../../../../context/OrderContext'
import Form from './Form'
import EditInfoMessage from './EditInfoMessage'
import { useSuccessMessage } from '../../../../../../hooks/useSuccessMessage'
import SavingMessage from './SavingMessage'


export default function EditForm() {
  const {username, productSelected, setproductSelected, handleEdit} = useContext(OrderContext)
  const [valueOnFocus, setvalueOnFocus] = useState()
  const {isSubmitted : isSaved, displaySuccessMessage} = useSuccessMessage()

  //gestionnaire d'évènement (event handlers)
  const handleChange = (e) => {
    const newValue = e.target.value
    const name = e.target.name
    const productBeingUpdated = {...productSelected, [name]: newValue}
    // setproductSelected({...productSelected, [name]: newValue}) 

    setproductSelected(productBeingUpdated) //update le form
    handleEdit(productBeingUpdated, username) // update le menu
}

const handleOnFocus = (e) => { 
  setvalueOnFocus(e.target.value)
 }
const handleOnBlur = (e) => { 
  const valueOnBlur = e.target.value
  if(valueOnFocus !== valueOnBlur) {
    displaySuccessMessage()
  }
 }

  return (
    <Form onChange={handleChange} onFocus={handleOnFocus} onBlur={handleOnBlur} product={productSelected}>
    <>
    {isSaved ? <SavingMessage /> : <EditInfoMessage />}
    </>
    </Form>
  )
}




