import React from 'react';
import classes from './FriendsPage.module.css';
import axios from 'axios';

class FriendsPage extends React.Component {
  componentDidMount = () => {
    axios.get(`http://backend-quantum-social-network/scripts/get_friends_list.php?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      console.log(response)
      this.props.setFriends(response.data.friends);
      this.props.setTotalFriendsCount(response.data.totalCount)
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`http://backend-quantum-social-network/scripts/get_friends_list.php?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setFriends(response.data.friends);
    });
  }

  render = () => {
    let pagesCount = Math.ceil(this.props.totalFriendsCount / this.props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={classes.friends}>
        <div className={classes.selectPage}>
          {
            pages.map(p => {
              return <span className={this.props.currentPage === p && classes.selected} onClick={(e) => { this.onPageChanged(p) }}>{p}</span>
            })
          }
        </div>
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