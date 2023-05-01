import React from 'react'
import './login.css'
// import Spotify from "./SG.png"
import { loginurl } from './spotify'
const Login = () => {
  return (
    <div className='login'>
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
         alt="" className='login__logo' />
        <a href={loginurl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login

// https://accounts.spotify.com/en/authorize?client_id=e6733fef749b4895983aa6f663cd756e&redirect_uri=http://localhost:3000/&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true
// I Have A Token:  BQDidarMcwwnNBpWtQBshbSRqhK2xftoLEJ1rDIG-2tZBMVsRxiGOflQ-ca1bcZbDFZ8mKy6oW-L3ARWtiudXYiyfd_GiFliagxyNxMAGDI4Pv7QqqVYsFRlKpo_yDU2_AiDyTnTiqXiagDvuxzsUZNFld_eOLlr1F5RHhP6kceQeZVtm5JvgZnmGGRfmFEkNOHIgCCAlWLjLwaKRTs5