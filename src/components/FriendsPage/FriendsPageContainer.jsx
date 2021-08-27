import React from 'react';
import { connect } from 'react-redux';
import FriendsPage from './FriendsPage.jsx';
import {
  addFriend,
  unfriend,
  toggleFollowingProgress,
  requestFriends
} from '../../redux/friendsReducer';
import Preloader from '../common/Preloader/Preloader.jsx';
import { compose } from 'redux';
import {
  getCurrentPage,
  getFollowingInProgress,
  getFriends, getIsFetching,
  getPageSize,
  getTotalFriendsCount
} from '../../redux/friendsSelectors.js';

// http://backend-quantum-social-network/scripts/get_friends_list.php?page=${this.props.currentPage}&count=${this.props.pageSize} - Путь к нашему серверу

class FriendsPageContainer extends React.Component {
  componentDidMount = () => {
    const { currentPage, pageSize } = this.props;

    this.props.getFriends(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props;
    this.props.getFriends(pageNumber, pageSize);
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
        addFriend={this.props.addFriend}
        followingInProgress={this.props.followingInProgress} />
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    friends: getFriends(state),
    pageSize: getPageSize(state),
    totalFriendsCount: getTotalFriendsCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  connect(mapStateToProps, {
    addFriend,
    unfriend,
    toggleFollowingProgress,
    getFriends: requestFriends,
  }),
)(FriendsPageContainer);