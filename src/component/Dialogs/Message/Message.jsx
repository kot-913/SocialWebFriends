import React from 'react';
import classes from './Message.module.css';


const Message = (props) => {
    return (
      <div className={classes.message}>
        <div className={classes.messageItem}><img src={props.imgUrl} alt="avatar img"/>{props.message}</div>
      </div>
    );
  };

  export default Message;