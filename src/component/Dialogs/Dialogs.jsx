import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {UpdateNewMessageBodyCreator, SendMessageCreater} from "../../Data/dialogsReducer";

const Dialogs = (props) => {
  let state = props.store.state.dialogsReducer;

  let dialogs = state.dialogData.map((dialogItem) => (
    <Dialog key={dialogItem.id} name={dialogItem.name} id={dialogItem.id} imgUrl={dialogItem.imgUrl} />
  ));
  let messages = state.messageData.map((messageItem) => (
    <Message key={messageItem.id} message={messageItem.message} imgUrl={messageItem.imgUrl} />
  ));
  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.store.dispatch(SendMessageCreater());
  }
  let onNewMessageChange = (e) => {
let body = e.target.value;
props.store.dispatch(UpdateNewMessageBodyCreator(body));
  }

  return (
<>
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogs}</div>
      <div className={classes.dialogsMessages}>{messages}</div>
    </div>
    <div className={classes.messageArea}>
      <div className={classes.myMessageTextarea}>
        <textarea 
            cols="40" 
            rows="4" 
            value = {newMessageBody} 
            onChange = {onNewMessageChange}
            placeholder="Enter you message">
        </textarea>
      </div>
      <div><button onClick={onSendMessageClick}>SEND MESSAGE</button></div>
</div>
    </>
  );
};

export default Dialogs;
