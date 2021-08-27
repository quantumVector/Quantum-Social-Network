import React from 'react';
import classes from './Post.module.css';
import actions from '../../assets/post-actions-icon.png';
import like from '../../assets/like-icon.png';
import comments from '../../assets/comments-icon.png';
import shared from '../../assets/share-icon.png';

const Post = ({ profile, post }) => {
  return (
    <div className={classes.block}>
      <div className={classes.postHeader}>
        <img src={profile.photo} className={classes.userPhoto} alt='icon'></img>
        <div className={classes.info}>
          <div className={classes.author}>
            <span className={classes.name}>{profile.name} </span>create new <span className={classes.feedback}>album</span>
          </div>
          <div className={classes.date}>{post.time}</div>
        </div>
        <div className={classes.actions}>
          <img src={actions} className={classes.icon} alt='icon'></img>
        </div>
      </div>

      <div className={classes.text}>{post.text}</div>

      <div className={classes.content}>
        <img src={post.content[0]} className={classes.item} alt='icon'></img>
        <img src={post.content[1]} className={classes.item} alt='icon'></img>
        <img src={post.content[2]} className={classes.item} alt='icon'></img>
      </div>

      <div className={classes.btns}>
        <div className={classes.item}>
          <img src={like} className={classes.icon} alt='icon'></img>
          <div>{post.likes}</div>
        </div>
        <div className={classes.item}>
          <img src={comments} className={classes.icon} alt='icon'></img>
          <div>{post.comments}</div>
        </div>
        <div className={classes.item}>
          <img src={shared} className={classes.icon} alt='icon'></img>
          <div>{post.shared}</div>
        </div>
      </div>
    </div>
  )
}

export default Post;