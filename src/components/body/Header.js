import React from 'react'
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDatalayerValue } from '../../DataLayer';

function Header() {
    const [{user},dispatch]=useDatalayerValue();
  return (
    <div className='header'>
        <div className="header__left">
            <SearchIcon/>
            <input placeholder='Search for Artist,Songs,Poadcast'
                type='text' />
        </div>
        <div className="header__right">
            <Avatar src={user?.images[0].url} alt={user?.display_name}/>
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}
export default Header
