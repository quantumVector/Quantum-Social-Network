import React from 'react';
import classes from './FriendsPage.module.css';

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
              <img src={friend.photo} className={classes.photo} alt="icon" />
              <div className={classes.info}>
                <div className={classes.name}>{friend.name}</div>
                <div className={classes.status}>{friend.status}</div>
                <div className={classes.message}>Write message</div>
              </div>
              <div className={classes.actions}>
                <div className={classes.unfriend}
                  onClick={() => { props.unfriends(friend.id) }}>Unfriend</div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default FriendsPage;