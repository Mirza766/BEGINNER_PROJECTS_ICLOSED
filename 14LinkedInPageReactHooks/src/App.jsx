import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddingExperience from './components/AddingExperience'
import ExperienceContextProvider from './context/ExperienceContextProvider'
function App() {
  const [count, setCount] = useState(0)

  return (
  <ExperienceContextProvider>
    <AddingExperience/>
  </ExperienceContextProvider>
  )
}

export default App
