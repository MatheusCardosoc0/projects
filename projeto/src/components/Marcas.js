import React from "react";

function Marca(props){
  return(
    <div>
    <p> name: {props.name}</p>
    </div>
    
    
  )
}

Marca.defaltprops = {
  name: "bily"
}

export default Marca