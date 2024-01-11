import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from '../../reusable-ui/TextInput';
import PrimaryButton from '../../reusable-ui/PrimaryButton';
import { theme } from '../../../theme';

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
    <TextInput value={input} onChange={handleChange} placeholder={"Entrez votre prénom"} required Icon={<BsPersonCircle className='input-login'/>} version="normal"/>   

    <PrimaryButton label={"Accèdez à mon espace"} Icon={<IoChevronForward />}/>

   </div>
      
    </LoginFormStyled> 
  )
}
const LoginFormStyled = styled.form`
text-align: center;
max-width: 500px;
min-width: 400px;
padding: 2rem 2rem;
font-family: 'Italiana', sans-serif;

hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
}

h2 {
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-size: ${theme.fonts.size.P4};
}

h3 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P2};
    text-transform: uppercase;
    margin-bottom: 30px;
}
.input-login{
  margin-left: 15px;
}
  
`;




