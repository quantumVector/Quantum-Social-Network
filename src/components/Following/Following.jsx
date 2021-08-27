import React from 'react';
import classes from './Following.module.css';

const Following = ({ photo, name }) => {
  return (
    <div className={classes.item}>
      <img src={photo} className={classes.icon} alt='icon'></img>
      <div className={classes.info}>{name}</div>
    </div>
  );
}

export default Following;