import React from 'react';
import classes from './Following.module.css';

const Following = (props) => {
  return (
    <div className={classes.item}>
      <img src={props.photo} className={classes.icon} alt='icon'></img>
      <div className={classes.info}>{props.name}</div>
    </div>
  );
}

export default Following;