import { useState, useEffect } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
      // console.log("clicked", Math.random())
      // counter = counter + 1
      // console.log(counter)
      if(counter < 20){
        setCounter(counter + 1)
        setCounter(prevCounter => prevCounter + 1) //For multiple updations (interview)
      }
  }

  const removeValue = () =>{
    if(counter > 0){
    setCounter(counter - 1)
    }
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br/>
    <button
    onClick={removeValue}>Remove value {counter}</button>
    <footer>{counter}</footer>
    </>  
  )
}

export default App
