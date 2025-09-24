import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddingExperience from './components/AddingExperience'
import ExperienceContextProvider from './context/ExperienceContextProvider'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom"
import ListofExperience from './components/ListofExperience'
import Layout from "./components/Layout.jsx"
function App() {
const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route element={<Layout/>}>
    <Route path='/' element={<AddingExperience/>}></Route>
    <Route path='/experience' element={<ListofExperience/>}></Route>

    </Route>
    </>
  )
)



  return (
  <ExperienceContextProvider>
    <RouterProvider router={router}/>
  </ExperienceContextProvider>
  )
}

export default App
