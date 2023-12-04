import React from 'react'
import './NavBar.scss'; 
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="top_section">
      <nav className='nav_wrapper'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h1 className='logo'>
              BEST
          </h1>
        </Link>
        <div>
          <ul className='menu_wrapper'>
            <li className='nav_link'>All</li>
            <li className='nav_link'>Food</li>
            <li className='nav_link'>Hostels</li>
            <li className='nav_link'>Tourist Sites</li>
            <li className='nav_link'>Night life</li>
            <li className='nav_link'>Art</li>
            <li className='nav_link'>Underground</li>
          </ul>
        </div>
        <div>
          <div className="button_holder">
            <Link to='login/'><button>Login</button></Link>
            <Link to='register/'><button>Register</button></Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
