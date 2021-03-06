import React from 'react';
import classes from './Post.module.css';
import actions from '../../assets/post-actions-icon.png';
import like from '../../assets/like-icon.png';
import comments from '../../assets/comments-icon.png';
import shared from '../../assets/share-icon.png';

const Post = (props) => {
  return (
    <div className={classes.block}>
      <div className={classes.postHeader}>
        <img src={props.profile.photo} className={classes.userPhoto} alt='icon'></img>
        <div className={classes.info}>
          <div className={classes.author}>
            <span className={classes.name}>{props.profile.name} </span>create new <span className={classes.feedback}>album</span>
          </div>
          <div className={classes.date}>{props.post.time}</div>
        </div>
        <div className={classes.actions}>
          <img src={actions} className={classes.icon} alt='icon'></img>
        </div>
      </div>

      <div className={classes.text}>{props.post.text}</div>

      <div className={classes.content}>
        <img src={props.post.content[0]} className={classes.item} alt='icon'></img>
        <img src={props.post.content[1]} className={classes.item} alt='icon'></img>
        <img src={props.post.content[2]} className={classes.item} alt='icon'></img>
      </div>

      <div className={classes.btns}>
        <div className={classes.item}>
          <img src={like} className={classes.icon} alt='icon'></img>
          <div>{props.post.likes}</div>
        </div>
        <div className={classes.item}>
          <img src={comments} className={classes.icon} alt='icon'></img>
          <div>{props.post.comments}</div>
        </div>
        <div className={classes.item}>
          <img src={shared} className={classes.icon} alt='icon'></img>
          <div>{props.post.shared}</div>
        </div>
      </div>
    </div>
  )
}

export default Post;