import classes from './friendItem.module.css'
import React from 'react'

const FriendImg = (props) => {
return(
    <img className={classes.avatar} src="https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png" alt=""/>
)
}

const FriendItem = (props) => {
    return(
        <div className={classes.friendItem}>
            <FriendImg />
            <div className={classes.friendName}>{props.name}</div>
        </div>
    )
}

export default FriendItem