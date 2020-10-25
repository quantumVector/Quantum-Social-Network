import React from 'react';
import classes from './EventBlock.module.css';
import picture from '../../assets/event.jpg';

const EventBlock = () => {
  return (
    <div className={classes.block}>
      <div className={classes.pic}>
        <div className={classes.date}>
          <div className={classes.month}>Jan</div>
          <div className={classes.day}>01</div>
        </div>
        <img src={picture} className={classes.picture} alt='pic'></img>
      </div>
      <div className={classes.eventInfo}>
        <div className={classes.event}>Travel to the Citadel for supplies.</div>
        <div className={classes.time}>01st Jan, 2186 07:00AM</div>
      </div>
    </div>
  )
}

export default EventBlock;