import React from 'react';
import classes from './ProfilePageTop.module.css';
import ProfileBtn from '../ProfileBtn/ProfileBtn.jsx';
import background from '../../assets/profile-head.png';
import Preloader from '../common/Preloader/Preloader.jsx';
import userPhoto from '../../assets/profiles/default-photo.png';
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHook';

const ProfileTop = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
        savePhoto(e.target.files[0]);
    }
}

  return (
    <div className={classes.block}>
      <div className={classes.head}>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <img src={background} className={classes.background} alt='background' />
        <div className={classes.name}>{profile.fullName}</div>
        <div className={classes.photoBackground}></div>
        <img src={profile.photos.small || userPhoto} className={classes.photo} alt='icon' />
        { isOwner && <input type={"file"} onChange={onMainPhotoSelected} className={classes.btnFile}/>}
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