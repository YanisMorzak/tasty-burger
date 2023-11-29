import React, {useState} from 'react'

export default function LoginPage() {
    const [input, setInput] = useState("")

    const submitDisplay = (e) => {
    e.preventDefault()
    setInput(e.target.value)  
  
    }
  
    const accesArea = (e) => {
      e.preventDefault()
      
      if (input == "") {
        alert("veuillez renseigner votre prénom")
      } else {
        alert("Bonjour " + input);
        setInput("")
        
      }
     
    }
  return (
<div>
    <h1>Bienvenu chez nous !</h1>
    <h3>Connectez vous</h3>
    <form action="" >
      <input type="text" placeholder='Entrez votre prénom' onChange={submitDisplay} value={input} /><button onClick={accesArea}>Accèdez à votre espace</button>
    </form> 
    </div>
  )
}
