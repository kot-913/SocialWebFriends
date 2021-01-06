import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div className={classes.profileInfo}>
<div className={classes.profileInfoImg}></div>
<div className={classes.profileInfoName}>Mister Cat</div>
        </div>
    )
}

export default ProfileInfo;