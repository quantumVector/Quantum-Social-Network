import React from 'react';
import { connect } from 'react-redux';
import FriendsPage from './FriendsPage.jsx';
import axios from 'axios';
import {
  unfriendActionCreator,
  setFriendsActionCreator,
  setCurrentPageCreator,
  setTotalFriendsCountCreator,
  toggleIsFetchingCreator
} from '../../redux/friendsReducer';
import Preloader from '../common/Preloader/Preloader.jsx';

class FriendsPageContainer extends React.Component {
  componentDidMount = () => {
    this.props.toggleIsFetching(true);
    axios.get(`http://backend-quantum-social-network/scripts/get_friends_list.php?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setFriends(response.data.friends);
      this.props.setTotalFriendsCount(response.data.totalCount)
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`http://backend-quantum-social-network/scripts/get_friends_list.php?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setFriends(response.data.friends);
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
        unfriends={this.props.unfriends} />
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
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingCreator(isFetching));
    }
  }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsPageContainer);

export default ChatContainer;