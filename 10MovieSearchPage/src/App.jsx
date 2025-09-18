import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchMovie from './components/SearchMovie'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'

function App() {
 const queryclient=new QueryClient();
  return (
 <QueryClientProvider client={queryclient}>
   <SearchMovie/>
 </QueryClientProvider>
  )
}

export default App
