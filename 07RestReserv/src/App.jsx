import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicketContextProvider from './context/TicketContextProvider'
import BookButton from './components/BookButtonPopup'
import ShowData from './components/ShowData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TicketContextProvider>
      <BookButton/>
      <ShowData/>
    </TicketContextProvider>
  )
}

export default App
