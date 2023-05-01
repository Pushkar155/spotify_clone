import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Body from '../body/Body'
import Footer from '../Footer/Footer'
import './player.css'
function Player({spotify}) {
  return (
    <div className='player'>
        <div className="player__body">
            <Sidebar/>
            <Body spotify={spotify}/>
            
        </div>
        <Footer/>
        
    </div>
  )
}

export default Player

