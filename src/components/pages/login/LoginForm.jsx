import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'



export default function LoginForm() {
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)  
  
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
        setInput("")   
        navigate(`order/${input}`)
    }
  return (
    <form action="submit" onSubmit={handleSubmit}  >
    <h1>Bienvenu chez nous !</h1>
    <h3>Connectez vous</h3>
      <input type="text" placeholder='Entrez votre prénom' onChange={handleChange} value={input}  required/><button >Accèdez à votre espace</button>
      
    </form> 
  )
}
