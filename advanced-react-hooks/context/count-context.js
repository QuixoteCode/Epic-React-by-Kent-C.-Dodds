import * as React from 'react'

const CountContext = React.createContext()

const useCount = () => {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error('useCount debe ser usado dentro de CountProvider')
  }
  return context
}

function CountProvider(props) {
  const [count, setCount] = React.useState(0)
  const value = [count, setCount]
  return <CountContext.Provider value={value} {...props} />
}

export { useCount, CountProvider }