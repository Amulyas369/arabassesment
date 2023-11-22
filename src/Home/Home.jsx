import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import "./Home.css"
import Dashboard from '../Pages/Dashboard/Dashboard'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

function Home() {
  return (
    <div className='home'>
        <div className='hero_left'>
             <Navbar/>
            <div className='hero'>
              <Dashboard/>  
            </div> 
            </div>
            <div className='hero_right'>
                <div className="notificat"><NotificationsRoundedIcon style={{color:"#1d9bf0"}}/> </div>
                <div className='blank'>
                <div className='white_space'></div>
                <div className='add'>+</div>
                </div>
                
            </div>
    </div>
  )
}

export default Home