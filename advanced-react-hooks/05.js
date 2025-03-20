// useImperativeHandle: scroll to top/bottom
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'

const MessagesDisplayForwardRef = React.forwardRef(function MessagesDisplay({messages}, ref) {
  const containerRef = React.useRef()
  React.useLayoutEffect(() => {
    scrollToBottom()
  })

  function scrollToTop() {
    containerRef.current.scrollTop = 0
  }

  function scrollToBottom() {
    containerRef.current.scrollTop = containerRef.current.scrollHeight
  }

  React.useImperativeHandle(ref, () => {
    return {
      scrollToTop,
      scrollToBottom,
    }
  })

  return (
    <div ref={containerRef} role="log">
      {messages.map((message, index, array) => (
        <div key={message.id}>
          <strong>{message.author}</strong>: <span>{message.content}</span>
          {array.length - 1 === index ? null : <hr />}
        </div>
      ))}
    </div>
  )
})

function App() {
  const messageDisplayRef = React.useRef()
  const [messages, setMessages] = React.useState(allMessages.slice(0, 8))
  const addMessage = () =>
    messages.length < allMessages.length
      ? setMessages(allMessages.slice(0, messages.length + 1))
      : null
  const removeMessage = () =>
    messages.length > 0
      ? setMessages(allMessages.slice(0, messages.length - 1))
      : null

  const scrollToTop = () => messageDisplayRef.current.scrollToTop()
  const scrollToBottom = () => messageDisplayRef.current.scrollToBottom()

  return (
    <div className="messaging-app">
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <button onClick={addMessage}>add message</button>
        <button onClick={removeMessage}>remove message</button>
      </div>
      <hr />
      <div>
        <button onClick={scrollToTop}>scroll to top</button>
      </div>
      <MessagesDisplayForwardRef ref={messageDisplayRef} messages={messages} />
      <div>
        <button onClick={scrollToBottom}>scroll to bottom</button>
      </div>
    </div>
  )
}

export default App

const allMessages = [
  `Rosaura: Hipogrifo violento, que corriste parejas con el viento,`,
  `Rosaura: ¿dónde, rayo sin llama, pájaro sin matiz, pez sin escama,`,
  `Rosaura: y bruto sin instinto natural, al confuso laberinto`,
  `Rosaura: de esas desnudas peñas te desbocas, te arrastras y despeñas?`,
  `Rosaura: Quédate en este monte, donde tenga los brutos su Faetonte;`,
  `Rosaura: que yo, sin más camino que el que dan las leyes del destino,`,
  `Rosaura: ciega y desesperada, bajaré la cabeza enmarañada`,
  `Rosaura: de este monte eminente que arruga al sol el ceño de la frente.`,
  `Rosaura: Mal, Polonia, recibes a un extranjero, pues con sangre escribes`,
  `Rosaura: su entrada en tus arenas, y a penas llega, cuando llega apenas.`,
  `Rosaura: Bien mi suerte lo dice; mas ¿dónde halló piedad un infelice?`,
  `Clarín: Di dos, y no me dejes en la posada a mí cuando te quejes;`,
  `Clarín: que si dos hemos sido los que de nuestra patria hemos salido`,
  `Clarín: a probar aventuras; dos los que, entre desdichas y locuras,`,
  `Clarín: aquí habemos llegado, y dos los que del monte hemos rodado,`,
  `Clarín: ¿no es razón que yo sienta meterme en el pesar, y no en la cuenta?`,
  `Rosaura: No quise darte parte en mis quejas, Clarín, por no quitarte,`,
  `Rosaura: llorando tu desvelo, el derecho que tienes al consuelo;`,
  `Rosaura: que tanto gusto había en quejarse, un filósofo decía,`,
  `Rosaura: que, a trueco de quejarse, habían las desdichas de buscarse.`,
  `Clarín: El filósofo era un borracho barbón: ¡oh, quién le diera`,
  `Clarín: más de mil bofetadas! Quejárase después de muy bien dadas.`,
  `Clarín: Mas, ¿qué haremos señora, a pie, solos, perdidos y a esta hora,`,
  `Clarín: en un desierto monte cuando se parte el sol a otro horizonte?`,
].map((m, i) => ({id: i, author: m.split(': ')[0], content: m.split(': ')[1]}))
