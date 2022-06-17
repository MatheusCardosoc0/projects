import React, { Component, useState } from 'react';
import './App.css';
import YourName from './components/YourName';

class App extends Component {
  render() {
    const [nome, setNome] = useState()

    return (
      <div className="Content">
        <h1>Primeiro React</h1>
        <YourName setNome={setNome}/>
        {nome}
      </div>
    )
  }
}

export default App;
