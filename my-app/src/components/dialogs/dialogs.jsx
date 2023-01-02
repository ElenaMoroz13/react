import React from 'react'
import classes from './dialogs.module.css'
import Message from './message/message';
import DialogItem from './dialogItem/dialogItem'



const Dialogs = (props) => {
    

    let messagesElements = props.messages.map(m => <Message message={m.message}/>)
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;