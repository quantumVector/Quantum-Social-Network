import React from 'react';
import { connect } from 'react-redux';
import FriendsPage from './FriendsPage.jsx';
import axios from 'axios';
import {
  addFriend,
  unfriend,
  setFriends,
  setCurrentPage,
  setTotalFriendsCount,
  toggleIsFetching
} from '../../redux/friendsReducer';
import Preloader from '../common/Preloader/Preloader.jsx';

class FriendsPageContainer extends React.Component {
  componentDidMount = () => {
    this.props.toggleIsFetching(true);
    /* axios.get(`http://backend-quantum-social-network/scripts/get_friends_list.php?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setFriends(response.data.friends);
      this.props.setTotalFriendsCount(response.data.totalCount)
    }); */

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true
    }).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setFriends(response.data.items);
      this.props.setTotalFriendsCount(response.data.totalCount)
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    /* axios.get(`http://backend-quantum-social-network/scripts/get_friends_list.php?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setFriends(response.data.friends);
    }); */

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true
    }).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setFriends(response.data.items);
    });
  }

  render = () => {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <FriendsPage totalFriendsCount={this.props.totalFriendsCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        friends={this.props.friends}
        unfriend={this.props.unfriend}
        addFriend={this.props.addFriend} />
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
    pageSize: state.friendsPage.pageSize,
    totalFriendsCount: state.friendsPage.totalFriendsCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
  }
}

const ChatContainer = connect(mapStateToProps, {
  addFriend,
  unfriend,
  setFriends,
  setCurrentPage,
  setTotalFriendsCount,
  toggleIsFetching
})(FriendsPageContainer);

export default ChatContainer;
