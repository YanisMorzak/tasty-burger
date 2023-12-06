import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { BsPersonCircle } from "react-icons/bs";


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
    <hr />
    <h3>Connectez-vous</h3>
   <div className='input-container'>
   <BsPersonCircle className='icon'/>
     <input type="text" placeholder='Entrez votre prénom' onChange={handleChange} value={input}  required/>
   </div ><button >Accèdez à mon espace</button>
      
    </LoginFormStyled> 
  )
}
const LoginFormStyled = styled.form`
background: green;
text-align: center;
max-width: 500px;
min-width: 400px;
padding: 2rem 2rem;
border-radius: 5px;
font-family: 'Italiana', sans-serif;

hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 30px;
}

h2 {
    color: white;
    text-transform: uppercase;
    font-size: 28px;
}

h3 {
    color: white;
    font-size: 20px;
    text-transform: uppercase;
}

.input-container {
    background-color: #ffffff;
    border-radius: 5px;
    padding: 18px 24px;
    margin: 18px 0;
    display: flex;
    align-items: center;

    .icon{
        color: #919191;
        font-size: 17px;
        margin-right: 8px;
    }

    input {
        border: none;
        color: #151515;
        font-size: 15px;
    }
}

  
`;




