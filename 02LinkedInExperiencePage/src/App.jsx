import { useState } from 'react'
import './App.css'
import ExperienceContextProvider from './context/ExperienceContextProvider'
import ExperiencePage from './components/ExperincePage'
import ListOfExperiences from './components/ListOfExperiences'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route element={<Layout />}>
        <Route path="/" element={<ExperiencePage />} />
        <Route path="/experience" element={<ListOfExperiences />} />
      </Route>
   </>
  )
)

  return (
 

<ExperienceContextProvider>
<RouterProvider router={router} />
</ExperienceContextProvider>


  )
}

export default App
