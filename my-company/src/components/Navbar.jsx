import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 'auto 0'}}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
    </div>
  )
}

export default Navbar