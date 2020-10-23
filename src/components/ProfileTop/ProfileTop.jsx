import React from 'react';
import classes from './ProfileTop.module.css';
import background from '../../assets/profile-head.png';
import photo from '../../assets/profiles/Shepard-mini.png';

const ProfileTop = () => {
  return (
    <div className={classes.block}>
      <div className={classes.head}>
        <img src={background} className={classes.background} alt='background'/>
        <div className={classes.name}>John Shepard</div>
        <div className={classes.photoBackground}></div>
        <img src={photo} className={classes.photo} alt='icon'/>
      </div>
      <div className={classes.btns}>
        <div className={classes.container}>
          <div className={classes.item}>
            <div className={classes.label}>Friends</div>
            <div className={classes.count}>256</div>
          </div>

          <div className={classes.item}>
            <div className={classes.label}>Followers</div>
            <div className={classes.count}>1,080</div>
          </div>

          <div className={classes.item}>
            <div className={classes.label}>Photos</div>
            <div className={classes.count}>512</div>
          </div>

          <div className={classes.item}>
            <div className={classes.label}>Videos</div>
            <div className={classes.count}>64</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileTop;