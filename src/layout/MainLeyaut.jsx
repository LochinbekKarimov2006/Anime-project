import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function MainLeyaut() {
  return (
  <div className=''>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>
  )
}

export default MainLeyaut