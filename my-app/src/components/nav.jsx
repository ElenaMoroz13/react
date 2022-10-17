import React from 'react';
import './nav.css'

const Nav = () =>{
    return(
        <nav className='nav'>
        <div className='item'><a >profile</a></div>
        <div className='item'><a >messages</a></div>
        <div className='item'><a >news</a></div>
        <div className='item'><a >music</a></div>
        <div className='item'><a >settings</a></div>
      </nav>
    )
}

export default Nav;