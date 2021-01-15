import React from 'react';
import classes from './FriendsPage.module.css';
import axios from 'axios';

const FriendsPage = (props) => {
  if (props.friends.length === 0) {
    axios.get('http://backend-quantum-social-network/scripts/get_friends_list.php').then(response => {
      props.setFriends(response.data);
    });
  }

  return (
    <div className={classes.friends}>
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