import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newPostArea = React.createRef();
  let addNewPostText = () => {
  let postText = newPostArea.current.value;
 props.addNewPost(postText);
}
  let dialogs = props.state.dialogData.map((dialogItem) => (
    <Dialog key={dialogItem.id} name={dialogItem.name} id={dialogItem.id} imgUrl={dialogItem.imgUrl} />
  ));
  let messages = props.state.messageData.map((messageItem) => (
    <Message key={messageItem.id} message={messageItem.message} imgUrl={messageItem.imgUrl} />
  ));

  return (
<>
    <div className={classes.myPosts}>
      <div className={classes.myPostsAddArea}>
        <div className={classes.myPostsTextarea}>
          <textarea cols="50" rows="6" ref={newPostArea}></textarea>
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
