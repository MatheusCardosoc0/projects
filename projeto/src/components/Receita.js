import React, { Component } from 'react';

function Receita(props){
  return(
    <div className='ContainerReceita'>
    <h1>Bolo de {props.name}</h1>
    <p>2 culheres de {props.igrediente1}</p>
    <p>3 copos de {props.igrediente2}</p>
    <p>Por fim 1 cunha de {props.igrediente3}</p>
    </div>
  )
}

Receita.def

export default Receita