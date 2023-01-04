import classes from './sidebar.module.css'
import React from 'react'
import FriendItem from './friendItem/friendItem'


const Sidebar = (props) => {

    let friendsElements = props.friends.map(f => <FriendItem name={f.name}/>)

    return(
        <div className={classes.friends}>
            <h2 className={classes.friendsTitle}>Friends</h2>
            <div className={classes.friendItems}>
            {friendsElements}
            </div>
        </div>
    )
}

export default Sidebar