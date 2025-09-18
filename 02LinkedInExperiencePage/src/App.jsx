import { useState } from 'react'
import './App.css'
import ExperienceContextProvider from './context/ExperienceContextProvider'
import ExperiencePage from './components/ExperincePage'
import ListOfExperiences from './components/ListOfExperiences'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import { FetchInd } from './components/API/Api'
import SelectedExperience from './components/API/Experience'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const queryclient=new QueryClient();
const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route element={<Layout />}>
        <Route path="/" element={<ExperiencePage />} />
        <Route path="/experience" element={<ListOfExperiences />} />
        <Route path="/experience/:id" element={<SelectedExperience/>}></Route>
      </Route>
   </>
  )
)

  return (
 
<QueryClientProvider client={queryclient}>
<ExperienceContextProvider>
<RouterProvider router={router} />
</ExperienceContextProvider>
</QueryClientProvider>

  )
}

export default App
