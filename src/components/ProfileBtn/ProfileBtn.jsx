import React from 'react';
import classes from './ProfileBtn.module.css';

const ProfileTop = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.label}>{props.label}</div>
      <div className={classes.count}>{props.count}</div>
    </div>
  )
}

export default ProfileTop;