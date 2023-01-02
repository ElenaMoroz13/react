import React from "react";
import classes from './header.module.css'

const Header = () =>{
    return(
        <header className={classes.header}>
            <svg className={classes.logo} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.24 15.08C16.07 15.3 14.57 17.15 12 17.14C9.53 17.12 8.08 15.39 7.89 15.15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.39999 8.73999C7.69999 8.73999 7.14 9.31 7.14 10C7.14 10.69 7.70999 11.26 8.39999 11.26C9.09999 11.26 9.66 10.69 9.66 10C9.66 9.31 9.09999 8.73999 8.39999 8.73999Z" fill="black"/>
<path d="M15.6 8.73999C14.9 8.73999 14.34 9.31 14.34 10C14.34 10.69 14.91 11.26 15.6 11.26C16.3 11.26 16.86 10.69 16.86 10C16.86 9.31 16.29 8.73999 15.6 8.73999Z" fill="black"/>
</svg>
        </header>
    )
}

export default Header;