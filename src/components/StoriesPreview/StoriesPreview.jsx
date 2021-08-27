import React from 'react';
import classes from './StoriesPreview.module.css';

const StoriesPreview = ({ profilePhoto, name, time }) => {
  return (
    <div className={classes.item}>
      <img src={profilePhoto} className={classes.storiesIcon} alt='icon'></img>
      <div className={classes.personInfo}>
        <div className={classes.name}>{name}</div>
        <div className={classes.time}>{time}</div>
      </div>
    </div>
  );
}

export default StoriesPreview;