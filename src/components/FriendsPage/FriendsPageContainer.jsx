import React from 'react';
import { connect } from 'react-redux';
import FriendsPage from './FriendsPage.jsx';
import axios from 'axios';
import { unfriendActionCreator, setFriendsActionCreator, setCurrentPageCreator, setTotalFriendsCountCreator } from '../../redux/friendsReducer';

class FriendsPageContainer extends React.Component {
  componentDidMount = () => {
    axios.get(`http://backend-quantum-social-network/scripts/get_friends_list.php?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
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
    return <FriendsPage totalFriendsCount={this.props.totalFriendsCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      friends={this.props.friends}
      unfriends={this.props.unfriends} />
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
    pageSize: state.friendsPage.pageSize,
    totalFriendsCount: state.friendsPage.totalFriendsCount,
    currentPage: state.friendsPage.currentPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    unfriends: (userId) => {
      dispatch(unfriendActionCreator(userId));
    },
    setFriends: (friends) => {
      dispatch(setFriendsActionCreator(friends));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageCreator(pageNumber));
    },
    setTotalFriendsCount: (totalCount) => {
      dispatch(setTotalFriendsCountCreator(totalCount));
    }
  }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsPageContainer);

export default ChatContainer;