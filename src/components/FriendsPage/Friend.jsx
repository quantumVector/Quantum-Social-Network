import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './FriendsPage.module.css';
import userPhoto from '../../assets/profiles/default-photo.png';

const Friend = ({friend, followingInProgress, unfriend, addFriend}) => {
  return (
    <div className={classes.friend} key={friend.id}>
      <NavLink to={'/profile/' + friend.id}>
        <img src={friend.photos.small != null ? friend.photos.small : userPhoto} className={classes.photo} alt="icon" />
      </NavLink>
      <div className={classes.info}>
        <NavLink to={'/profile/' + friend.id}>
          <div className={classes.name}>{friend.name}</div>
        </NavLink>
        <div className={classes.status}>{friend.status}</div>
        <div className={classes.message}>Write message</div>
      </div>
      <div className={classes.actions}>

        {friend.followed
          ? <button className={classes.unfriend}
            disabled={followingInProgress.some(id => id === friend.id)}
            onClick={() => unfriend(friend.id)}>Unfriend</button>
          : <button className={classes.unfriend}
            disabled={followingInProgress.some(id => id === friend.id)}
            onClick={() => addFriend(friend.id)}>Add friend</button>}

      </div>
    </div>
  )
}

export default Friend;