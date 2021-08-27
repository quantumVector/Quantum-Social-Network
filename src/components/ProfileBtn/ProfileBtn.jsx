import React from 'react';
import classes from './ProfileBtn.module.css';

const ProfileTop = ({ label, count }) => {
  return (
    <div className={classes.item}>
      <div className={classes.label}>{label}</div>
      <div className={classes.count}>{count}</div>
    </div>
  )
}

export default ProfileTop;