import React from 'react';
import classes from './nav.module.css';

// let classes = {
//   'nav': 'nav_nav_nav__Hsn\+t__uhhlB',
//   'item': 'nav_item__PsA1V',
//   'active': '
// }

// let c1 = 'item'
// let c2 = 'active'
// let classes = c1 + ' ' + c2
let classesNew = `${classes.item} ${classes.active}`

const Nav = () =>{
    return(
      <nav className={classes.nav}>
        <div className={classes.item}><a >profile</a></div>
        <div className={`${classes.item} ${classes.active}`}><a >messages</a></div>
        <div className={classes.item}><a >news</a></div>
        <div className={classes.item}><a >music</a></div>
        <div className={classes.item}><a >settings</a></div>
      </nav>
    )
}

export default Nav;