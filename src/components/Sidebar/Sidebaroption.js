import React from 'react'
import './sidebaroption.css'
function Sidebaroption({title,Icon}) {
  return (
    <div className='sidebaroption'>
        {Icon && <Icon className="sidebaroption__icons"/>}
        {Icon ? <h4>{title}</h4> :<p>{title}</p>}
        {/* <Icon/> */}
        {/* <p>{title}</p> */}
    </div>
  )
}

export default Sidebaroption
