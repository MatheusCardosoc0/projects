import React from "react";
import { useState } from "react";

function Form(){

  function CadastrarUsuario(e){
    e.preventDefault()
    console.log(name)
    console.log('usuarioCadastrado')
  }

  const [name, setname] = useState('matheus')

  return(
    <div>
      <h1>Cadastre-se</h1>
      <form onSubmit={CadastrarUsuario}>
        <div>
          <input type={'text'}
           id="name"
            name="name"
             placeholder="digite seu nome."
             onChange={(e) => setname(e.target.value)}
             value={name}>
             </input>
        </div>
        <div>
          <input type={'password'} id="password"  name="password" placeholder="digite sua senha."></input>
        </div>
        <div>
          <input type={'submit'} value="Cadastrar"></input>
        </div>
      </form>
    </div>
  )
}

export default Form