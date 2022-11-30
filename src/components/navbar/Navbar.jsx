import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">RenerHoteis</span>
            <div className="navItems">
                <button className="navButton">Registrar</button>
                <button className="navButton">login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar