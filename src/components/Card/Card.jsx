import React from 'react'
import "./Card.css"
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import BackupRoundedIcon from '@mui/icons-material/BackupRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
function Card() {
  return (
    <div  className='card-box'>
     <div className='card'>
        <h2 className='plantype'>Basic</h2>
        <p className='discount'>$ 89.99/mo</p>
        <h2 className='price'>$ 9.99/mo</h2>
        <button type='button'className='button basic_btn'>Get Started <ArrowRightAltRoundedIcon/> </button>
        <hr/>
        <h5 className='featuers'>What you'll get :</h5>
        <ul>
            <li> <Person2RoundedIcon/> Upto 25 users</li>
            <li> <BackupRoundedIcon/> Upto 25gb storage</li>
            <li> <EmailRoundedIcon/> Email Support</li>

        </ul>
        <div className='explore'>Explore Feature <ArrowRightRoundedIcon style={{color:"#ffe7a9"}}/></div>
     </div>
     <div className='card'>
     <h2 className='plantype'>Standard</h2>
        <p className='discount'>$ 189.99/mo</p>
        <h2 className='price'>$ 99.99/mo</h2>
        <button type='button'className='button standerd_btn'>Get Started <ArrowRightAltRoundedIcon/> </button>
        <hr/>
        <h5 className='featuers'>What you'll get :</h5>
        <ul>
            <li> <Person2RoundedIcon/> Upto 50 users</li>
            <li> <BackupRoundedIcon/> Upto 60gb storage</li>
            <li> <EmailRoundedIcon/> Email + Chart Support</li>

        </ul>
        <div className='explore'>Explore Feature <ArrowRightRoundedIcon style={{color:"#ff9494"}}/></div>
     </div>
     <div className='card'>
     <h2 className='plantype'>Premium</h2>
        <p className='discount'>$ 389.99/mo</p>
        <h2 className='price'>$ 199.99/mo</h2>
        <button type='button'className='button premium_btn'>Get Started <ArrowRightAltRoundedIcon/> </button>
        <hr/>
        <h5 className='featuers'>What you'll get :</h5>
        <ul>
            <li> <Person2RoundedIcon/> Upto 75 users</li>
            <li> <BackupRoundedIcon/> Upto 10gb storage</li>
            <li> <EmailRoundedIcon/> Email + Chart + Whatsaap Support</li>

        </ul>
        <div className='explore'>Explore Feature <ArrowRightRoundedIcon style={{color:"#e7a2ff"}}/></div>
     </div>
    </div>
  )
}

export default Card