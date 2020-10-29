import React from 'react';
import classes from './StoriesPreview.module.css';

const StoriesPreview = (props) => {
  return (
    <div className={classes.item}>
      <img src={props.profilePhoto} className={classes.storiesIcon} alt='icon'></img>
      <div className={classes.personInfo}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.time}>{props.time}</div>
      </div>
    </div>
  );
}

export default StoriesPreview;