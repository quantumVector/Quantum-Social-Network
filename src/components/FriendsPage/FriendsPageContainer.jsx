import React from 'react';
import { connect } from 'react-redux';
import FriendsPage from './FriendsPage.jsx';
import { unfriendActionCreator, setFriendsActionCreator } from '../../redux/friendsReducer';

const mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    unfriends: (userId) => {
      dispatch(unfriendActionCreator(userId));
    },
    setFriends: (friends) => {
      dispatch(setFriendsActionCreator(friends));
    }
  }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsPage);

export default ChatContainer;