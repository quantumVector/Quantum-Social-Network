import React from 'react';
import classes from './ProfileTop.module.css';
import ProfileBtn from '../ProfileBtn/ProfileBtn.jsx';
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
          <ProfileBtn label='Friends' count='256' />
          <ProfileBtn label='Followes' count='1,080' />
          <ProfileBtn label='Photos' count='512' />
          <ProfileBtn label='Videos' count='64' />
        </div>
      </div>
    </div>
  )
}

export default ProfileTop;