import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from './TextInput';

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

   <div>
    <TextInput value={input} onChange={handleChange} placeholder={"Entrez votre prénom"} required Icon={<BsPersonCircle className='icon'/>}/>   

    <button className='button-container'>
     <span >Accèdez à mon espace</span>
     <IoChevronForward className='icon-button'/>
    </button>
   </div>
      
    </LoginFormStyled> 
  )
}
const LoginFormStyled = styled.form`

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

.button-container {
    background-color: orange;
    color: white;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 20px 24px;
    margin: 18px 0;
    border-radius: 5px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.3s ease;

    .icon-button {
        margin-left: 8px;
    }

    &:hover{
        background-color: white;
        color: orange;
        border: 1px solid orange;
    }
}

  
`;




