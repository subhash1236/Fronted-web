/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='min-vh-100'>
      <Outlet/>
    </div>
      <Footer/>

    </div>
  )
}

export default App