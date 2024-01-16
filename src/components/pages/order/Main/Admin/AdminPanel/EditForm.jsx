import React, { useContext } from 'react'
import HintMessage from './HintMessage'
import OrderContext from '../../../../../../context/OrderContext'

export default function EditForm() {
  const {productSelected} = useContext(OrderContext)

  return (
    <div>
      {productSelected.title}
      {productSelected.imageSource}
      {productSelected.price !== 0 && productSelected.price}
      <HintMessage />
    </div>
  )
}
