import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import InfiniteScrollingApp from './components/InfiniteScrollingApp'



function App() {
 
const queryclient=new QueryClient();
  return (
   <QueryClientProvider client={queryclient}>
<InfiniteScrollingApp/>
   </QueryClientProvider>
  )
}

export default App
