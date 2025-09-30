import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Provider } from 'react-redux'
import './App.css'
import { store } from './app/store'
import AddingExperience from './components/AddExperience'
import ListOfExperiences from './components/ListOfExperiences'

function App() {
 

  return (
   <Provider store={store}>
    <AddingExperience/>
    <ListOfExperiences/>
   </Provider>
  )
}

export default App
