import React from 'react';
import classes from './RightSidebar.module.css';
import Ashley from '../../assets/profiles/Ashley-mini.png';
import Liara from '../../assets/profiles/Liara-mini.png';
import Mordin from '../../assets/profiles/Mordin-mini.png';
import James from '../../assets/profiles/James-mini.png';

const RightSidebar = () => {
  return (
    <div className={classes.block}>
      <div className={classes.stories}>
        <div className={classes.title}>STORIES</div>
        <div className={classes.items}>

          <div className={classes.item}>
            <img src={Ashley} className={classes.storiesIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>Ashley Williams</div>
              <div className={classes.time}>29 minutes ago</div>
            </div>
          </div>

          <div className={classes.item}>
            <img src={Liara} className={classes.storiesIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>Liara T'Soni</div>
              <div className={classes.time}>3 hours ago</div>
            </div>
          </div>

          <div className={classes.item}>
            <img src={Mordin} className={classes.storiesIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>Mordin Solus</div>
              <div className={classes.time}>9 hours ago</div>
            </div>
          </div>

          <div className={classes.item}>
            <img src={James} className={classes.storiesIcon} alt='icon'></img>
            <div className={classes.personInfo}>
              <div className={classes.name}>James Vega</div>
              <div className={classes.time}>18 hours ago</div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default RightSidebar;