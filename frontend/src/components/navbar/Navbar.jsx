import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import NavItems from './NavItems'
const Navbar = () => {
  return (
    <nav className="nav">
        <div className="title-container">
          <span className="title">eKart</span>  
        </div>
        <ul className='navbar-nav'>
            {
              NavItems.map(({id, name, link})=>{
                return <li key={id} className="navbar-items"><NavLink to={link}>{name}</NavLink></li>
              })
            }
        </ul>
    </nav>
  )
}

export default Navbar