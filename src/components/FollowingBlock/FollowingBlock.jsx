import React from 'react';
import classes from './FollowingBlock.module.css';
import Following from '../Following/Following';
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
        <Following photo={spectres} name='Organization SPECTRES' />
        <Following photo={alliance} name='Alliance Special Forces' />
        <Following photo={news} name='Galactic News' />
      </div>
    </div >
  )
}

export default FollowingBlock;