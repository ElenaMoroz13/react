import React from 'react'
import classes from './../dialogs.module.css'


const Message = (props) =>{
    return(
        <div className='message'>
            <div className={classes.message}>{props.message}</div>
        </div>
    )
}


export default Message;