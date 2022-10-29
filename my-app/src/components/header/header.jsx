import React from "react";
import classes from './header.module.css'

const Header = () =>{
    return(
        <header className={classes.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png'/>
        </header>
    )
}

export default Header;