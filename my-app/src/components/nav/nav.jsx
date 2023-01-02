import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './nav.module.css';

let classesNew = `${classes.item} ${classes.active}`

const Nav = () =>{
    return(
      <nav className={classes.nav}>
        <div className={classes.item}><NavLink to='/profile' activeClassName={classes.activeLink}>profile</NavLink></div>
        <div className={`${classes.item} ${classes.active}`}><NavLink to='/dialogs' activeClassName={classes.activeLink}>messages</NavLink></div>
        <div className={classes.item}><NavLink to='/'>news</NavLink></div>
        <div className={classes.item}><NavLink to='/' >music</NavLink></div>
        <div className={classes.item}><NavLink to='/'>settings</NavLink></div>
      </nav>
    )
}

export default Nav;