import { useState } from 'react'
import './App.css'
import Addtodo from './component/AddTodo'
import Todos from './component/Todos'

function App() {
  

  return (
    <>
      <h1>Ranjeet Yadav Redux toolkit</h1>
      <Addtodo/>
      <Todos/>
    </>
  )
}

export default App
