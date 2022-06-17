import React from "react";
import Button from "./event/Button";

function Evento({number}){

  function MyEvent() {
    alert(`oi ${number}`)
  }

  return(
    <div>
      <p>Clique aqui !</p>
      <Button event={MyEvent} text='aperte'></Button>
    </div>
  )
}

export default Evento