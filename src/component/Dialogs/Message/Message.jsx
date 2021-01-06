import React from 'react';
import classes from './Message.module.css';


const Message = (props) => {
    return (
      <div className={classes.message}>
        <div className={classes.messageItem}>{props.message}</div>
      </div>
    );
  };

  export default Message;