import { useState } from 'react'
import './App.css'
import ExperienceContextProvider from './context/ExperienceContextProvider'
import ExperiencePage from './components/ExperincePage'
import BasicValidationPage from './components/BasicValidationPage'


function App() {
  

  return (
<ExperienceContextProvider>
<ExperiencePage/>
</ExperienceContextProvider>
  )
}

export default App
