// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

//Without Extra Credits
/*
function UsernameForm({onSubmitUsername}) {

  function handleSubmit(event){
    event.preventDefault();
    const valor = event.target.elements.nombreUsuario.value;
    onSubmitUsername(valor);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombreUsuario">Username:</label>
        <input id="nombreUsuario" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}
*/

//Extra Credits Number 1
//Copiado y pegado de lo ya hecho
function UsernameForm({onSubmitUsername}) {

  function handleSubmit(event){
    event.preventDefault();
    const valor = event.target.elements.nombreUsuario.value;
    onSubmitUsername(valor);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombreUsuario">Username:</label>
        <input id="nombreUsuario" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
