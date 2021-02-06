import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newPostArea = React.createRef();
  let addNewPostText = () => {
  let postText = newPostArea.current.value;
 props.addNewPost(postText);
 newPostArea.current.value = "";
}
  let dialogs = props.dialogs.dialogData.map((dialogItem) => (
    <Dialog key={dialogItem.id} name={dialogItem.name} id={dialogItem.id} imgUrl={dialogItem.imgUrl} />
  ));
  let messages = props.dialogs.messageData.map((messageItem) => (
    <Message key={messageItem.id} message={messageItem.message} imgUrl={messageItem.imgUrl} />
  ));

  let onTextChange = () => {
    let text = newPostArea.current.value;
    props.updateNewPostText(text);
  };

  return (
<>
    <div className={classes.myPosts}>
      <div className={classes.myPostsAddArea}>
        <div className={classes.myPostsTextarea}>
          <textarea cols="50" rows="6" ref={newPostArea} value= {props.dialogs.newPostText} onChange = {onTextChange}></textarea>
        </div>
        <button onClick = { addNewPostText }>ADD NEW POST</button>
      </div>
      </div>
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogs}</div>

      <div className={classes.dialogsMessages}>{messages}</div>
    </div>
    </>
  );
};

export default Dialogs;
