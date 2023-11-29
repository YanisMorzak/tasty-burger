import React, {useState} from 'react'

export default function LoginForm() {
    const [input, setInput] = useState("")

    const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)  
  
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
        alert("Bonjour " + input);
        setInput("")   
    }
  return (
    <form action="" onSubmit={handleSubmit} >
    <h1>Bienvenu chez nous !</h1>
    <h3>Connectez vous</h3>
      <input type="text" placeholder='Entrez votre prénom' onChange={handleChange} value={input} required/><button >Accèdez à votre espace</button>
    </form> 
  )
}
