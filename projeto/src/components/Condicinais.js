
import React, { useState } from "react";

function Condicional(){
  const [email, setemail] = useState()
  const [usermail,setusermail] = useState()

  function EmailSubmit(e){
    e.preventDefault()
     setusermail(email)
  }

  function EmailClear(){
    usermail('')
  }


  return(
    <div className="Form">
      <h1>Cadastre-se</h1>
      <form>
        <input type={'email'}
         id="email"
         placeholder="Digite seu email..."
         onChange={(e) => setemail(e.target.value)}>
         </input>
        <button onClick={EmailSubmit}>Enviar</button>
        {usermail && (
          <div>
            <p>O email do usuario é {usermail}</p>
            <button onClick={EmailClear}>Limpar</button>
          </div>
        )}
      </form>
    </div>
  )
}

export default Condicional