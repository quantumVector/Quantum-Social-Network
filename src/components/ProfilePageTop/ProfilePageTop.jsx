import React from 'react';
import classes from './ProfilePageTop.module.css';
import ProfileBtn from '../ProfileBtn/ProfileBtn.jsx';
import background from '../../assets/profile-head.png';
import Preloader from '../common/Preloader/Preloader.jsx';
import userPhoto from '../../assets/profiles/default-photo.png';

const ProfileTop = (props) => {
  if(!props.profile) {
    return <Preloader />
  }
debugger
  return (
    <div className={classes.block}>
      <div className={classes.head}>
        <img src={background} className={classes.background} alt='background' />
        <div className={classes.name}>{props.profile.fullName}</div>
        <div className={classes.photoBackground}></div>
        <img src={props.profile.photos.small != null ? props.profile.photos.small : userPhoto} className={classes.photo} alt='icon' />
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