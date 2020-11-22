import React from 'react';
import classes from './EventBlock.module.css';

const EventBlock = (props) => {
  return (
    <div className={classes.block}>
      <div className={classes.pic}>
        <div className={classes.date}>
        <div className={classes.month}>{props.events.month}</div>
          <div className={classes.day}>{props.events.day}</div>
        </div>
        <img src={props.events.photo} className={classes.picture} alt='pic'></img>
      </div>
      <div className={classes.eventInfo}>
        <div className={classes.event}>{props.events.label}</div>
        <div className={classes.time}>{props.events.fullTime}</div>
      </div>
    </div>
  )
}

export default EventBlock;