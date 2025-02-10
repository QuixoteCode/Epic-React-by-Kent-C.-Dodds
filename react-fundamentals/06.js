// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react';

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
/*
function UsernameForm({onSubmitUsername}) {

  const ref = React.useRef(null)

  function handleSubmit(event){
    event.preventDefault();
    onSubmitUsername(ref.current.value);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombreUsuario">Username:</label>
        <input id="nombreUsuario" type="text" ref={ref}/>
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

//Extra Credits Number 2
/*
function UsernameForm({onSubmitUsername}) {

  const [error, setError] = React.useState(null);

  function handleSubmit(event){
    event.preventDefault();
    const valor = event.target.elements.nombreUsuario.value;
    onSubmitUsername(valor);
  }
  
  function handleChange(event){
    const valorInput = event.target.value;
    const esValido = valorInput === valorInput.toLowerCase();
    setError(esValido ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombreUsuario">Username:</label>
        <input id="nombreUsuario" type="text" onChange={handleChange}/>
        <p style={{color: "red"}} role="alert">{error}</p>
      </div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}
*/

//Extra Credits Number 3
function UsernameForm({onSubmitUsername}) {

  const [username, setUsername] = React.useState(null);

  function handleSubmit(event){
    event.preventDefault();
    onSubmitUsername(username);
  }
  
  function handleChange(event){
    const valorInput = event.target.value;
    setUsername(valorInput.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombreUsuario">Username:</label>
        <input
          id="nombreUsuario"
          type="text"
          value={username}
          onChange={handleChange}
        />
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
