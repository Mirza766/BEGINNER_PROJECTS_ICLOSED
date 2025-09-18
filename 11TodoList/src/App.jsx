import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddtodoContextProvider from './context/addtodoContextProvider'
import AddingTodo from './components/addTodo'
import ListOfExperiences from './components/showTodos'
function App() {


  return (
    <AddtodoContextProvider>
      <AddingTodo/>
      <ListOfExperiences/>
    </AddtodoContextProvider>
  )
}

export default App
