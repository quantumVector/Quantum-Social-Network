import React from 'react';
import classes from './Post.module.css';
import user from '../../assets/profiles/Shepard-mini.png';
import actions from '../../assets/post-actions-icon.png';
import photo1 from '../../assets/postPhotos/photo1.jpg';
import photo2 from '../../assets/postPhotos/photo2.jpg';
import photo3 from '../../assets/postPhotos/photo3.jpg';
import like from '../../assets/like-icon.png';
import comments from '../../assets/comments-icon.png';
import shared from '../../assets/share-icon.png';

const Post = () => {
  return (
    <div className={classes.block}>
      <div className={classes.postHeader}>
        <img src={user} className={classes.userPhoto} alt='icon'></img>
        <div className={classes.info}>
          <div className={classes.author}><span className={classes.name}>John Shepard </span>create new <span className={classes.feedback}>album</span></div>
          <div className={classes.date}>6 hours ago</div>
        </div>
        <div className={classes.actions}>
          <img src={actions} className={classes.icon} alt='icon'></img>
        </div>
      </div>

      <div className={classes.text}>Individuals forged in the fire of service and battle.</div>

      <div className={classes.content}>
        <img src={photo1} className={classes.item} alt='icon'></img>
        <img src={photo2} className={classes.item} alt='icon'></img>
        <img src={photo3} className={classes.item} alt='icon'></img>
      </div>

      <div className={classes.btns}>
        <div className={classes.item}>
          <img src={like} className={classes.icon} alt='icon'></img>
          <div>87</div>
        </div>
        <div className={classes.item}>
          <img src={comments} className={classes.icon} alt='icon'></img>
          <div>20</div>
        </div>
        <div className={classes.item}>
          <img src={shared} className={classes.icon} alt='icon'></img>
          <div>13</div>
        </div>
      </div>
    </div>
  )
}

export default Post;