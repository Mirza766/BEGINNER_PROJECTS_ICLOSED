import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactBookContextProvider from './context/ContactBookContextProvider'
import AddContactForm from './components/AddContactForm'
import ShowContactDetails from './components/ShowFormData'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ContactBookContextProvider>
     <AddContactForm/>
     <ShowContactDetails/>
    </ContactBookContextProvider>
  )
}

export default App
