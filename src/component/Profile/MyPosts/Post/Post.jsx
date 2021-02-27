import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {


  return <div className={classes.post}>
<div><img className={classes.avatar} src="https://filmdaily.co/wp-content/uploads/2020/04/funny-animals-lede-1300x731.jpg" alt="avatar"/></div>
<div className={classes.postText}>{props.title}</div>
<div className={classes.postText}><span>{props.countLike}</span></div>
  </div>;
};
export default Post;
