import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import './index.css'
import { Route ,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
// import Home from './components/Home/Home.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} > 
    <Route path='' element={<Home/>}/>
    </Route>



  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
