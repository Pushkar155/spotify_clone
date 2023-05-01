import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { gettokenFromUrl } from './components/Login/spotify';
import SpotiFyWebApi from "spotify-web-api-js"
import Player from './components/Player/Player';
import { useDatalayerValue } from './DataLayer';
const spotify=new SpotiFyWebApi();
function App() {
  // run code based on given condition
  // const [token,setToken]=useState(null);
// DataLayer.user is equalse to the [{ user },dispatch]
  const [{ user,token },dispatch]=useDatalayerValue();

  useEffect(() =>{
    const hash=gettokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token
    if(_token){
      // setToken(_token)
      dispatch({
        type:"SET_TOKEN",
        token:_token
      })
      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{
        // console.log("me",user);
        dispatch({
          type:'SET_USER',
          user:user,
        });
      });
      spotify.getUserPlaylists().then((playlists)=>(
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        })
      ))
      spotify.getPlaylist("37i9dQZEVXcWMYd3uASnQQ").then((response)=>(
        dispatch({
          type:'SET_DISCOVER_WEEKLY',
          discover_weekly:response,
        })
      ))
    }

  },[]);
  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) :(
          <Login/>
        )
      }
    </div>
  );
}
export default App;
