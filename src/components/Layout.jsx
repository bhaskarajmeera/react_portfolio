import React from 'react'
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <div>
        <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        <Navbar /> 
        <main className="main" style={{minHeight: "50vh"}}>
            <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  )
}
