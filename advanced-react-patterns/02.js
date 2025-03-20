// Compound Components
// http://localhost:3000/isolated/exercise/02.js

//Without Extra Credits
/*
import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    const newChild = React.cloneElement(child, {on, toggle})
    return newChild
  })
}

const ToggleOn = ({on, children}) => {
  return on ? children : null
}

const ToggleOff = ({on, children}) => {
  return !on ? children : null
}

const ToggleButton = ({on, toggle}) => {
  return <Switch on={on} onClick={toggle} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  )
}
*/

//Extra Credits Number 1
import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    //Opción 1
    /*
    if(typeof child.type === 'string'){
      return child
    }

    const newChild = React.cloneElement(child, {on, toggle})
    return newChild
    */

    //Opción 2
    if (allowedTypes.includes(child.type)) {
      const newChild = React.cloneElement(child, {on, toggle})
      return newChild
    }
    return child
  })
}

const ToggleOn = ({on, children}) => {
  return on ? children : null
}

const ToggleOff = ({on, children}) => {
  return !on ? children : null
}

const ToggleButton = ({on, toggle}) => {
  return <Switch on={on} onClick={toggle} />
}

//Opción 2
const allowedTypes = [ToggleOn, ToggleOff, ToggleButton]

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hola mundo</span>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
