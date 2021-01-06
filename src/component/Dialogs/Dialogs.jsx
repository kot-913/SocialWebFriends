import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = props.state.dialogData.map((dialogItem) => (
    <Dialog key={dialogItem.id} name={dialogItem.name} id={dialogItem.id} />
  ));
  let messages = props.state.messageData.map((messageItem) => (
    <Message key={messageItem.id} message={messageItem.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogs}</div>

      <div className={classes.dialogsMessages}>{messages}</div>
    </div>
  );
};

export default Dialogs;
