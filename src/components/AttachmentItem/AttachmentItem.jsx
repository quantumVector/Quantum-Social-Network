import React from 'react';
import classes from './AttachmentItem.module.css';

const AttachmentItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.icon}>
        <img src={props.icon} alt='icon'></img>
      </div>
      <div className={classes.labelBlock}>
        <div className={classes.count}>{props.count}</div>
        <div className={classes.label}>{props.label}</div>
      </div>
    </div>
  )
}

export default AttachmentItem;