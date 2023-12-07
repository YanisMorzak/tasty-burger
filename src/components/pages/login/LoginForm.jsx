import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from '../../reusable-ui/TextInput';
import PrimaryButton from '../../reusable-ui/PrimaryButton';

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

    <PrimaryButton label={"Accèdez à mon espace"} Icon={<IoChevronForward className='icon-button'/>}/>

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
  
`;




