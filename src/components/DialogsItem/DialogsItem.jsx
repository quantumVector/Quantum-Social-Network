import React from 'react';
import classes from './DialogsItem.module.css';

const DialogsItem = ({ photo, name, msg, count }) => {
  return (
    <div className={classes.dialogsItem}>
      <img src={photo} alt='icon'></img>
      <div className={classes.info}>
        <div className={classes.name}>{name}</div>
        <div className={classes.msg}>{msg}</div>
      </div>
      <div className={classes.count}>{count}</div>
    </div>
  )
}

export default DialogsItem;