import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingCart from './components/ShoppingCart'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ShoppingContextProvider from './context/ShoppingContextProvider'
import DisplayingData from './components/DisplayingData'

function App() {
  const [count, setCount] = useState(0)
const queryclient=new QueryClient()
  return (
<QueryClientProvider client={queryclient}>
  <ShoppingContextProvider>
  <ShoppingCart/>
  <DisplayingData/>
  </ShoppingContextProvider>
</QueryClientProvider>
  )
}

export default App
