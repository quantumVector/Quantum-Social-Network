import React from 'react';
import classes from './FriendsOnline.module.css';

const FriendsOnline = (props) => {
  return (
    <div className={classes.item}>
      <img src={props.profilePhoto} className={classes.profilePhoto} alt='icon'></img>
      <div className={classes.personInfo}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.online}></div>
      </div>
    </div>
  );
}

export default FriendsOnline;