import React from 'react';
import classes from './EventBlock.module.css';

const EventBlock = ({ events }) => {
  return (
    <div className={classes.block}>
      <div className={classes.pic}>
        <div className={classes.date}>
          <div className={classes.month}>{events.month}</div>
          <div className={classes.day}>{events.day}</div>
        </div>
        <img src={events.photo} className={classes.picture} alt='pic'></img>
      </div>
      <div className={classes.eventInfo}>
        <div className={classes.event}>{events.label}</div>
        <div className={classes.time}>{events.fullTime}</div>
      </div>
    </div>
  )
}

export default EventBlock;