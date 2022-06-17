import React from "react";

function OutraLista({itens}){
  return(
    <div>
    <h3>Lista top:</h3>
    {itens.length > 0 ?(
    itens.map((item, index) => (
        <p key={index}> {item} </p>
      ))) : (
        <p>não ha itens</p>
      )}
    </div>
  )
}

export default OutraLista