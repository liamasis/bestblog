import React from 'react'
import './NavBar.scss'; 
export const NavBar = () => {
  return (
    <div className="top_section">
      <nav className='nav_wrapper'>
        <div className='logo'>
            BEST
        </div>

        <div>
          <ul className='menu_wrapper'>
            <li className='nav_link'>All</li>
            <li className='nav_link'>Technology</li>
            <li className='nav_link'>Food</li>
            <li className='nav_link'>Hostels</li>
            <li className='nav_link'>Climate</li>
            <li className='nav_link'>Sites</li>
            <li className='nav_link'>Underground</li>
          </ul>
        </div>
        <div>
          <div className="button_holder">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </nav>
      

    </div>
  )
}
