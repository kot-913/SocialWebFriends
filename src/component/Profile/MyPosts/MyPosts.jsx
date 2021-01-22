import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

let postTextarea = React.createRef();
let addPost = () => {
  let newPost = postTextarea.current.value;
  alert(newPost);
}

  let posts =  props.postData.map((postItem) => (
    <Post key={postItem.id} title={postItem.title} countLike={postItem.countLike} />));
  return (
    <div className={classes.myPosts}>
      <div className={classes.myPostsAddArea}>
        <div className={classes.myPostsTextarea}>
          <textarea cols="50" rows="6" ref={postTextarea}></textarea>
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
