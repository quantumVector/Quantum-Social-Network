import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './FriendsPage.module.css';
import userPhoto from '../../assets/profiles/default-photo.png';

const FriendsPage = (props) => {
  let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.friends}>
      <div className={classes.selectPage}>
        {
          pages.map(p => {
            return <span className={props.currentPage === p && classes.selected} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
          })
        }
      </div>
      {
        props.friends.map(friend => {
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
                    disabled={props.followingInProgress.some(id => id === friend.id)}
                    onClick={() => props.unfriend(friend.id)}>Unfriend</button>
                  : <button className={classes.unfriend}
                    disabled={props.followingInProgress.some(id => id === friend.id)}
                    onClick={() => props.addFriend(friend.id)}>Add friend</button>}

              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default FriendsPage;