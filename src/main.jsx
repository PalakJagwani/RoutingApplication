import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/Layout'
import { Home, About, Profile, Github } from './Pages/index'
import {github_Information} from './Pages/Github'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route loader={github_Information} path='/github' element={<Github/>} />
      <Route path='/profile/:user_id' element={<Profile/>}/>
    </Route>
  ), 
  {
    basename : "/RoutingApplication"
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
