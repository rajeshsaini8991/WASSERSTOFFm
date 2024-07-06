import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/nav-foot/Navbar'

const Layout = () => {

 
  return (
    <div className='container' style={{ display: "flex",minHeight:"100vh",flexDirection:"column"}}>
      <Navbar />
      <Outlet/>
    
    </div>
  );
}

export default Layout