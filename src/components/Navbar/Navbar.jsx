import React from 'react'
import "./Navbar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import ParkIcon from '@mui/icons-material/Park';
import ExtensionIcon from '@mui/icons-material/Extension';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


function Navbar() {
  return (
    <div className='navbar'>
        <div className='upper-nav'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3flIHsvZtK3eU7tEnp-LSEjNznTZCn0dkcA&usqp=CAU'alt='' className='Profile-picture'/>
            <h5 className='Profile_name'>Amulya Kumar 	<span>&#62;</span></h5>
            <p className="emailID">amulyas.cf@gmail.com</p>
        </div>
        <hr/>
        <div className="lower-nav">
            <div className="nav_menu">
                <div className="dashboard nav_option active_navoption" ><DashboardIcon className='mouicon'/>
                    Dashboard</div>
                <div className="perks nav_option"><ParkIcon className='mouicon'/>Perks</div>
                <div className="Addons nav_option"><ExtensionIcon className='mouicon'/>Addons</div>
                <div className="FAQ nav_option"><QuestionAnswerIcon className='mouicon'/>FAQ</div>
                <div className="Support nav_option"><SupportAgentIcon className='mouicon'/>Support</div>
            </div>
            <div className="nav_footer"> Log out<PowerSettingsNewRoundedIcon className='mouicon ' style={{width:"25px", height:"25px"}}/></div>
        </div>
        <div className='menubar'> <MenuRoundedIcon/></div>
    </div>
  )
}

export default Navbar