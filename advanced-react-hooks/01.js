// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

//Without Extra Credits
/*
import * as React from 'react'

function countReducer(state, newState) {
 return newState
}

function Counter({initialCount = 0, step = 1}) {
  const [count, setCount] = React.useReducer(countReducer, initialCount)

  const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}
*/

//Extra Credits Number 1
/*
import * as React from 'react'

function countReducer(count, step) {
  return count + step
}

function Counter({initialCount = 0, step = 1}) {
  const [count, changeCount] = React.useReducer(countReducer, initialCount)
  const increment = () => changeCount(step)
  
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}
*/

//Extra Credits Number 2
/*
import * as React from 'react'

function countReducer(state, action) {
  return { ...state, ...action}
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => setState({count: count + step})
  
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}
*/

//Extra Credits Number 3
/*
import * as React from 'react'

//Mi resolución inicial:
//function countReducer(state, action) {
  //if (typeof action === 'function') {
    //return action(state)
  //} else {
    //return {...state, ...action}
  //}
//}

const countReducer = (state, action) => ({
  ...state,
  ...(typeof action === 'function' ? action(state) : action),
})

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () =>
    setState(currentState => ({count: currentState.count + step}))

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}
*/

//Extra Credits Number 4
import * as React from 'react'

function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return {count: state.count + action.step}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
