import React from 'react';
import classes from './FollowingBlock.module.css';
import actions from '../../assets/post-actions-icon.png';
import spectres from '../../assets/spectres-icon.png';
import alliance from '../../assets/alliance-icon.png';
import news from '../../assets/galaxy-news-icon.png';

const FollowingBlock = () => {
  return (
    <div className={classes.block}>
      <div className={classes.blockHeader}>
        <div className={classes.title}>FOLLOWING</div>
        <img src={actions} className={classes.actions} alt="icon"></img>
      </div>
        <div className={classes.items}>
          <div className={classes.item}>
            <img src={spectres} className={classes.icon} alt='icon'></img>
            <div className={classes.info}>Organization SPECTRES</div>
          </div>
        </div>

        <div className={classes.items}>
          <div className={classes.item}>
            <img src={alliance} className={classes.icon} alt='icon'></img>
            <div className={classes.info}>Alliance Special Forces</div>
          </div>
        </div>

        <div className={classes.items}>
          <div className={classes.item}>
            <img src={news} className={classes.icon} alt='icon'></img>
            <div className={classes.info}>Galactic News</div>
          </div>
        </div>
    </div>
  )
}

export default FollowingBlock;