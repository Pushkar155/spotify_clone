import React from 'react'
import './footer.css'
//imported for middle item(suffel,backward,playpause,forward,suffel)
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
// import ShuffleOnRoundedIcon from '@mui/icons-material/ShuffleOnRounded';
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
///////////////////////////////////////////////////////////////////////////////
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import { Grid,Slider } from '@mui/material';
////// playbar ////
function Footer() {
  return (
    <div className='footer'>
      {/* <h1>i am footer</h1>  */}
      <div className="footer__left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSitugd0MNzhXEO0jnwsrvcu4GmNYOOvDjljA&usqp=CAU" alt=""  className='footer__albumLogo'/>
        
        <div className="footer__songInfo">
          <h4>Yeha!</h4>
          <p>User</p>

        </div>

      </div>
      <div className="footer__center">
        <ShuffleRoundedIcon className='footer__green'/>
        <SkipPreviousRoundedIcon className='footer__icon'/>
        <PlayCircleOutlineRoundedIcon fontSize='large' className='footer__icon'/>
        <SkipNextRoundedIcon className='footer__icon'/>
        <RepeatRoundedIcon className='footer__green'/>
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayRoundedIcon/>
          </Grid>
          <Grid item>
            <VolumeDownRoundedIcon/>
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
