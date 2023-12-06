import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'




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
    <LoginFormStyled action="submit" onSubmit={handleSubmit}  >
    <h2>Bienvenu chez nous !</h2>
    <h3>Connectez vous</h3>
    <input type="text" placeholder='Entrez votre prénom' onChange={handleChange} value={input}  required/><button >Accèdez à mon espace</button>
      
    </LoginFormStyled> 
  )
}
const LoginFormStyled = styled.form`
background: green;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  
`;




