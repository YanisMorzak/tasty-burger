import React from 'react'

export default function EmptyMenuAdmin({resetProducts}) {
  return (
    <div>
      <span>Le menu est vide ?</span>
      <p>CLIQUEZ CI-DESSOUS POUR LE REINITIALISER</p>
      <button onClick={resetProducts}>générer de nouveaux produits</button>
    </div>
  )
}
