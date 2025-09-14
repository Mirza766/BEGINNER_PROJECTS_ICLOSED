import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PublicHoliday from './component/PublicHolidays'
import { QueryClientContext,QueryClient, QueryClientProvider } from '@tanstack/react-query'
function App() {
  const [count, setCount] = useState(0)
const queryclient=new QueryClient();

  return (
    

    <QueryClientProvider client={queryclient}>
    
      <PublicHoliday/>
    </QueryClientProvider>
  )
}

export default App
