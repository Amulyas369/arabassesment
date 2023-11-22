import React from 'react'
import "./Dashboard.css"
import Card from '../../components/Card/Card'
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import BackupRoundedIcon from '@mui/icons-material/BackupRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
function Dashboard() {
  return (
    <div className='dashBoard'>
          <div className='Headline'>Choose a plan thats just right for You</div>
                <div className='plan_duration'>
                    <div className='duration_container'>
                        <div className='duration' style={{backgroundColor:"#8ab9ff"}}>Monthly</div>
                        <div className='duration'>Annually <sup>-10%</sup> </div>
                    </div>
                </div>
                <div className="Card_container">
               <Card/>
               <div className='type-container'>
               <div className="type_card " >
                <div className='left_card card_sec'>
                    <p className='cost-tag free_btn'>Free Forever</p>
                <h2 className='plantype' style={{margin:0}}>Free Starter</h2>
                <p className='free_des'>The quickest and easiest way to try protocols with basics functionalities</p>
                <button type='button'className='button free_btn'>Get Started <ArrowRightAltRoundedIcon/> </button>
                </div>
                <div className='right_card card_sec'>
                <h5 className='featuers'>What you'll get :</h5>
                <ul>
            <li> <Person2RoundedIcon/> Upto 8 users</li>
            <li> <BackupRoundedIcon/> Upto 3gb storage</li>
            <li> <EmailRoundedIcon/> Email Support</li>
            <li><DoneAllRoundedIcon/>Basic of documents,Task Flow,Voting,Accounting,Banking,Notes,Investor,Director and Team Management Include.</li>
        </ul>
                </div>
               </div>
               <div className="type_card ">
               <div className='left_card card_sec'>
                    <p className='cost-tag enterprise_btn'>Let's Connect</p>
                <h2 className='plantype' style={{margin:0}}>Enterprise Plane</h2>
                <p className='free_des'>Effortlessly customize and fine-tune services as your needs shift. ensuring the perfect tools for success</p>
                <button type='button'className='button enterprise_btn'>Get Started <ArrowRightAltRoundedIcon/> </button>
                </div>
                <div className='right_card card_sec'>
                <h5 className='featuers'>What you'll get :</h5>
                <ul>
            <li> <Person2RoundedIcon/> Upto 75 users</li>
            <li><DoneAllRoundedIcon/>Customization of all other features </li>
        </ul>
                </div>
               </div>
                
               </div>
                </div>
                <div className='infoemation'>Some unique features are provided as add-ons withindividual plans for each features</div>
    </div>
  )
}

export default Dashboard