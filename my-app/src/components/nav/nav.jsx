import React from 'react';
import classes from './nav.module.css';

let classesNew = `${classes.item} ${classes.active}`

const Nav = () =>{
    return(
      <nav className={classes.nav}>
        <div className={classes.item}><a href='/profile'>profile</a></div>
        <div className={`${classes.item} ${classes.active}`}><a href='/dialogs'>messages</a></div>
        <div className={classes.item}><a >news</a></div>
        <div className={classes.item}><a >music</a></div>
        <div className={classes.item}><a >settings</a></div>
      </nav>
    )
}

export default Nav;