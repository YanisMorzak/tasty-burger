import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div><h1>PAGE 404</h1><Link to="/"><button>Retourner vers la page d'accueil</button></Link></div>
  )
}
