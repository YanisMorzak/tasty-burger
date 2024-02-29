import React, { useContext } from 'react'
import OrderContext from '../../../../../../context/OrderContext'
import Form from './Form'
import EditInfoMessage from './EditInfoMessage'

export default function EditForm() {
  const {username, productSelected, setproductSelected, handleEdit} = useContext(OrderContext)

  //gestionnaire d'évènement (event handlers)
  const handleChange = (e) => {
    const newValue = e.target.value
    const name = e.target.name
    const productBeingUpdated = {...productSelected, [name]: newValue}
    // setproductSelected({...productSelected, [name]: newValue}) 

    setproductSelected(productBeingUpdated) //update le form
    handleEdit(productBeingUpdated, username) // update le menu
}

  return (
    <Form onChange={handleChange} product={productSelected}>
    <>
    <EditInfoMessage />
    </>
    </Form>
  )
}




