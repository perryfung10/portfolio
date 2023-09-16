import React from 'react'
import { Routes } from 'react-router-dom'

export default function MainNavbar() {\
    


  return (
    <nav className="mainNavbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/1"></Link>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={} />
            <Route path="/projects" element={} />
            <Route path="/1" element={} />
        </Routes>


    </nav>
  )
}
