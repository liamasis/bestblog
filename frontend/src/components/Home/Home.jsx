import React from 'react'
import { SidePanel } from '../SidePanel/SidePanel'
import './Home.scss'; 

const Home = () => {
  return (
    <div className='container'>
        <div className="main_page">
            <div className="first_column">
                <div>Home</div>
            </div>
            <div className="second_column">
                <SidePanel/>
            </div>
        </div>
        
    </div>
    
  )
}
export default Home