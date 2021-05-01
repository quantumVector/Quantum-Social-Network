/*
import photoAshley from '../assets/profiles/Ashley-mini.png';
import photoGarrus from '../assets/profiles/Garrus-mini.png';
import photoLiara from '../assets/profiles/Liara-mini.png';
import photoMiranda from '../assets/profiles/Miranda-mini.png'; */

import { usersAPI } from '../api/api';

const ADD_FRIEND = 'ADD-FRIEND';
const UNFRIEND = 'UNFRIEND';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET-TOTAL-FRIENDS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

const initialState = {
  friends: [],
  pageSize: 100,
  totalFriendsCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-FRIEND':
      return {
        ...state,
        friends: state.friends.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          };

          return user;
        })
      };
    case 'UNFRIEND':
      return {
        ...state,
        friends: state.friends.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          };

          return user;
        })
      };
    case 'SET-FRIENDS':
      return { ...state, friends: action.friends };
    case 'SET-CURRENT-PAGE':
      return { ...state, currentPage: action.pageNumber };
    case 'SET-TOTAL-FRIENDS-COUNT':
      return { ...state, totalFriendsCount: action.totalCount };
    case 'TOGGLE-IS-FETCHING':
      return { ...state, isFetching: action.isFetching };
    case 'TOGGLE-IS-FOLLOWING-PROGRESS':
      return {
        ...state, followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      };
    default:
      return state;
  }
}

export const addFriendSuccess = (userId) => {
  return {
    type: ADD_FRIEND,
    userId,
  }
}

export const unfriendSuccess = (userId) => {
  return {
    type: UNFRIEND,
    userId,
  }
}

export const setFriends = (friends) => {
  return {
    type: SET_FRIENDS,
    friends,
  }
}

export const setCurrentPage = (pageNumber) => {
  return {
    type: SET_CURRENT_PAGE,
    pageNumber,
  }
}

export const setTotalFriendsCount = (totalCount) => {
  return {
    type: SET_TOTAL_FRIENDS_COUNT,
    totalCount,
  }
}

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  }
}

export const toggleFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  }
}


export const getFriends = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));

    usersAPI.getFriends(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setFriends(data.items));
      dispatch(setTotalFriendsCount(data.totalCount));
    });
  }
}

export const addFriend = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    usersAPI.addFriend(userId)
      .then(data => {
        if (data.resultCode === 0) dispatch(addFriendSuccess(userId));

        dispatch(toggleFollowingProgress(false, userId));
      });
  }
}

export const unfriend = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    usersAPI.unfriend(userId)
      .then(data => {
        if (data.resultCode === 0) dispatch(unfriendSuccess(userId));

        dispatch(toggleFollowingProgress(false, userId));
      });
  }
}

export default friendsReducer;