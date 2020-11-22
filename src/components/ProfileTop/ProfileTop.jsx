import React from 'react';
import classes from './ProfileTop.module.css';
import ProfileBtn from '../ProfileBtn/ProfileBtn.jsx';
import background from '../../assets/profile-head.png';

const ProfileTop = (props) => {
  return (
    <div className={classes.block}>
      <div className={classes.head}>
        <img src={background} className={classes.background} alt='background' />
        <div className={classes.name}>{props.profile.name}</div>
        <div className={classes.photoBackground}></div>
        <img src={props.profile.photo} className={classes.photo} alt='icon' />
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