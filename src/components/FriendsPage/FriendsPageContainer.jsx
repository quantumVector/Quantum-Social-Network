import React from 'react';
import { connect } from 'react-redux';
import FriendsPage from './FriendsPage.jsx';
import { unfriendActionCreator, setFriendsActionCreator, setCurrentPageCreator, setTotalFriendsCountCreator } from '../../redux/friendsReducer';

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

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsPage);

export default ChatContainer;