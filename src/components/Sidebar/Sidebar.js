import React from 'react'
import './sidebar.css'
import Sidebaroption from './Sidebaroption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicRoundedIcon from '@mui/icons-material/LibraryMusicRounded';
import { useDatalayerValue } from '../../DataLayer';
function Sidebar() {

    const [{playlists},dispatch]=useDatalayerValue()

  return (
    <div className='sidebar'>
      <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" 
      className='sidebar__logo' />

      <Sidebaroption Icon={HomeIcon} title="Home"/>

      <Sidebaroption Icon={SearchIcon} title="Search" />

      <Sidebaroption Icon={LibraryMusicRoundedIcon} title="Your Library"/>
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        // console.log(playlist)
        <Sidebaroption title={playlist.name}/>
      ))}
    </div>
  )
}

export default Sidebar
