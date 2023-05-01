import React from 'react'
import { useDatalayerValue } from '../../DataLayer'
import './body.css'
import Header from './Header'
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Songrow from './Songrow';

function Body({spotify}) {
  const [{discover_weekly},dispatch]=useDatalayerValue();
  // console.log(discover_weekly)
  return (
    <div className='body'>

        <Header spotify={spotify}/>

        <div className="body__info">
          <img src={discover_weekly?.images[0].url}
            alt="" 
          />
          <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>

          </div>
        </div>
        <div className="body__songs">
          <div className='body__icons'>
            <PlayCircleFilledRoundedIcon className='body__suffel'/>
            <FavoriteIcon fontSize='large'/>
            <MoreHorizIcon/>
          </div>

          {/* list of songs */}

          {discover_weekly?.tracks.items.map(item =>(
            <Songrow track={item.track}/>
          ))}
        </div>
    </div>
  )
}

export default Body
