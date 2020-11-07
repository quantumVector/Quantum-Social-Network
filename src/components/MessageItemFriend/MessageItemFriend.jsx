import React from 'react';
import classes from './MessageItemFriend.module.css';

const MessageItemFriend = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.info}>
        <img src={props.photo} alt='icon'></img>
        <div className={classes.msg}>{props.msg}</div>
      </div>
      <div className={classes.time}>{props.time}</div>
    </div>
  )
}

export default MessageItemFriend;