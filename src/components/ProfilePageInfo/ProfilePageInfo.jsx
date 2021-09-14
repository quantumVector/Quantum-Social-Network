import React, { useState } from 'react';
import classes from './ProfilePageInfo.module.css';
import ProfileInfoDataForm from "./ProfileInfoDataForm";

const ProfileInfo = ({ profile, isOwner, saveProfileInfo }) => {
  const [editMode, setEditMode] = useState(false);

  const onSubmit = (formData) => {
    saveProfileInfo(formData).then(
      () => {
        setEditMode(false);
      }
    );
  }

  return (
    <div className={classes.block}>
      <div className={classes.info}>
        <div className={classes.leftColumn}>
          <div className={classes.label}>Birthday:</div>
          <div className={classes.label}>Race:</div>
          <div className={classes.label}>Gender:</div>
          <div className={classes.label}>Home planet:</div>
          <div className={classes.label}>Current location:</div>
          <div className={classes.label}>Full name:</div>
          <div className={classes.label}>Looking for a job:</div>
          <div className={classes.label}>My professional skills:</div>
          <div className={classes.label}>About me:</div>
          <div className={classes.label}>Contacts:</div>
        </div>
        {editMode
          ? <ProfileInfoDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
          : <ProfileInfoData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
      </div>
      <div className={classes.btn}>Show full information</div>
    </div>
  )
}

const ProfileInfoData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div className={classes.rightColumn}>
      {profile ? <div>
        <div className={classes.labeled}>April 11, 2154</div>
        <div className={classes.labeled}>Human</div>
        <div className={classes.labeled}>Male</div>
        <div className={classes.labeled}>Earth</div>
        <div className={classes.labeled}>Normandy SR-2</div>
        <div className={classes.labeled}>{profile.fullName}</div>
        <div className={classes.labeled}>{profile.lookingForAJob ? "yes" : "no"}</div>
        <div className={classes.labeled}>{profile.lookingForAJobDescription}</div>
        <div className={classes.labeled}>{profile.aboutMe}</div>
        {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
      </div>
        : <div>Emty</div>
      }

      {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
    </div >
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div className={classes.labeled}>{contactTitle}: {contactValue}</div>
}

export default ProfileInfo;