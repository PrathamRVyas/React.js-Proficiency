import { useState } from 'react'
import './App.css'
import Card1 from './Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: "pratham123",
    age: 21
  }
  let newArr = [1, 2, 3, 4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card1 username="helloPratham" buttonTxt="Click to Add"/>
      <Card1 username="notPratham"/>
    </>
  )
}

export default App