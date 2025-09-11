import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Input from './components/Input'
import './App.css'
import FetchData from './components/FetchData'
function App() {
  
  return (
    <UserContextProvider>
      <h2>Context Api (Label and Input)</h2>
      <Input/>
      <FetchData/>
    </UserContextProvider>
  )
}

export default App
