import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <MyPosts postData={props.profile.postData} addNewPost={props.addNewPost} updateNewPostText={props.updateNewPostText} newPostText={props.newPostText}/>
    </div>
  );
};

export default Profile;
