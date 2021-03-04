import React from 'react';
import classes from './ProfilePageInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={classes.block}>
      <div className={classes.info}>
        <div className={classes.leftColumn}>
          <div className={classes.label}>Birthday:</div>
          <div className={classes.label}>Race:</div>
          <div className={classes.label}>Gender:</div>
          <div className={classes.label}>Home planet:</div>
          <div className={classes.label}>Current location:</div>
        </div>
        <div className={classes.rightColumn}>
          <div className={classes.labeled}>April 11, 2154</div>
          <div className={classes.labeled}>Human</div>
          <div className={classes.labeled}>Male</div>
          <div className={classes.labeled}>Earth</div>
          <div className={classes.labeled}>Normandy SR-2</div>
        </div>
      </div>
      <div className={classes.btn}>Show full information</div>
    </div>
  )
}

export default ProfileInfo;