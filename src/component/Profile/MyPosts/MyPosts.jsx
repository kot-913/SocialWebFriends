import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
let postTextarea = React.createRef();
let addPost = () => {
  let action = {type: "ADD-NEW-POST"}
  props.dispatch(action);
}

  let posts =  props.postData.map((postItem) => (
    <Post key={postItem.id} title={postItem.title} countLike={postItem.countLike} />));

    let onTextChange = () => {
      let text = postTextarea.current.value;
      let action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
      props.dispatch(action);
    };

  return (
    <div className={classes.myPosts}>
      <div className={classes.myPostsAddArea}>
        <div className={classes.myPostsTextarea}>
          <textarea cols="50" rows="6" ref={postTextarea} value={props.newPostText} onChange = {onTextChange}></textarea>
        </div>
        <button onClick={addPost}>ADD NEW POST</button>
      </div>
      <h2 className={classes.myPostsHeader}>
        <span>New</span> posts for your
        <img
          src="https://cdn0.iconfinder.com/data/icons/pinterest-ui-flat/48/Pinterest_UI-09-512.png"
          alt="plane"
        />
        friends
      </h2>
      <div className={classes.myPostsList}>
       {posts}
      </div>
    </div>
  );
};
export default MyPosts;
