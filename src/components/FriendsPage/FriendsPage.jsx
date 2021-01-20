import React from 'react';
import classes from './FriendsPage.module.css';
import axios from 'axios';

class FriendsPage extends React.Component {
  constructor(props) {
    super(props);

    axios.get('http://backend-quantum-social-network/scripts/get_friends_list.php').then(response => {
      this.props.setFriends(response.data);
    });
  }

  render = () => {
    return (
      <div className={classes.friends}>
        {
          this.props.friends.map(friend => {
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
                    onClick={() => { this.props.unfriends(friend.id) }}>Unfriend</div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default FriendsPage;