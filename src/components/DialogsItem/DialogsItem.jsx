import React from 'react';
import classes from './DialogsItem.module.css';

const DialogsItem = (props) => {
  return (
    <div className={classes.dialogsItem}>
      <img src={props.photo} alt='icon'></img>
      <div className={classes.info}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.msg}>{props.msg}</div>
      </div>
      <div className={classes.count}>{props.count}</div>
    </div>
  )
}

export default DialogsItem;