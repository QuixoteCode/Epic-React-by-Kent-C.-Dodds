// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

//Without Extra Credits
/*
function Greeting() {
  const [name, setName] = React.useState('')

  function handleChange(event) {
    setName(event.target.value) 
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}
*/

//Extra Credits Number 1
function Greeting({initialName = ''}) {
  const [name, setName] = React.useState(initialName)

  function handleChange(event) {
    setName(event.target.value) 
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} value={name} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Lucas" />
}

export default App
