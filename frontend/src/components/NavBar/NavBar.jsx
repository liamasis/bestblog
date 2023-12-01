import React from 'react'
import './NavBar.scss'; 
export const NavBar = () => {
  return (
    <div className="top_section">
      <nav className='nav_wrapper'>
        <div>
            What is best
        </div>

        <div>
          <ul className='menu_wrapper'>
            <li>All</li>
            <li>Technology</li>
            <li>Food</li>
            <li>Hostels</li>
            <li>Climate</li>
            <li>Sites</li>
            <li>Underground</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
