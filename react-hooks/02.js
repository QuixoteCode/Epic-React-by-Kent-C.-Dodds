// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

//Without Extra Credits
/*
function Greeting({initialName = ''}) {
  const [name, setName] = React.useState(
    window.localStorage.getItem('name') ?? initialName,
  )

  React.useEffect (() => {
    window.localStorage.setItem('name', name)
  })

  function handleChange(event) {
    setName(event.target.value)
    
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Lucas"/>
}
*/

//Extra Credits Number 1
/*
function Greeting({initialName = ''}) {
  const [name, setName] = React.useState(
    () => window.localStorage.getItem('name') ?? initialName,
  )

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  })

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Lucas" />
}
*/

//Extra Credits Number 2
/*
function Greeting({initialName = ''}) {
  const [name, setName] = React.useState(
    () => window.localStorage.getItem('name') ?? initialName,
  )

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  }, [name]);

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Lucas" />
}
*/

//Extra Credit Number 3
/*
function useLocalStorageState(key, defaultValue = ''){
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) ?? defaultValue,
  )

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state]);

  return [state, setState]
}

function Greeting({initialName = ''}) {

  const [name, setName] = useLocalStorageState('name', initialName)

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}
*/

//Extra Credits Number 4
function useLocalStorageState(
  key,
  defaultValue = '',
  {serializar = JSON.stringify, deserializar = JSON.parse} = {},
) {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      return deserializar(valueInLocalStorage)
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue
  })

  const keyPreviaRef = React.useRef(key)

  React.useEffect(() => {
    const keyPrevia = keyPreviaRef.current
    if (keyPrevia !== key) {
      window.localStorage.removeItem(keyPrevia)
    }
    keyPreviaRef.current = key
    window.localStorage.setItem(key, serializar(state))
  }, [key, serializar, state])

  return [state, setState]
}

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorageState('name', initialName)
  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="Lucas" />
}

export default App
