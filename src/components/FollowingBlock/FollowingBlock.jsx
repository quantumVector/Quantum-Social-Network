import React from 'react';
import classes from './FollowingBlock.module.css';
import Following from '../Following/Following';
import actions from '../../assets/post-actions-icon.png';


const FollowingBlock = (props) => {
  const following = props.following.map( f => {
    return <Following photo={f.photo} name={f.name} />
  });
  return (
    <div className={classes.block}>
      <div className={classes.blockHeader}>
        <div className={classes.title}>FOLLOWING</div>
        <img src={actions} className={classes.actions} alt="icon"></img>
      </div>
      <div className={classes.items}>
        { following }
      </div>
    </div >
  )
}

export default FollowingBlock;