import { createSelector } from "reselect";

const getFriendsSelector = (state) => {
  return state.friendsPage.friends;
}

export const getFriends = createSelector(getFriendsSelector, (friends) => {
  return friends.filter(u => true);
});

export const getPageSize = (state) => {
  return state.friendsPage.pageSize;
}

export const getTotalFriendsCount = (state) => {
  return state.friendsPage.totalFriendsCount;
}

export const getCurrentPage = (state) => {
  return state.friendsPage.currentPage;
}

export const getIsFetching = (state) => {
  return state.friendsPage.isFetching;
}
export const getFollowingInProgress = (state) => {
  return state.friendsPage.followingInProgress;
}