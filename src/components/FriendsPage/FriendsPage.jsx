import React from 'react';
import classes from './FriendsPage.module.css';
import Paginator from '../common/Paginator/Paginator';
import Friend from './Friend';

const FriendsPage = ({ currentPage, totalFriendsCount, pageSize, onPageChanged, friends, ...props }) => {
  return (
    <div className={classes.friends}>
      <Paginator currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalFriendsCount}
        pageSize={pageSize} />
      {
        friends.map(friend => <Friend friend={friend}
          key={friend.key}
          followingInProgress={props.followingInProgress}
          addFriend={props.addFriend}
          unfriend={props.unfriend} />)
      }
    </div>
  )
}

export default FriendsPage;