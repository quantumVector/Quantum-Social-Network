/*
import photoAshley from '../assets/profiles/Ashley-mini.png';
import photoGarrus from '../assets/profiles/Garrus-mini.png';
import photoLiara from '../assets/profiles/Liara-mini.png';
import photoMiranda from '../assets/profiles/Miranda-mini.png'; */

import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

const ADD_FRIEND = 'quantum_network/friends/ADD_FRIEND';
const UNFRIEND = 'quantum_network/friends/UNFRIEND';
const SET_FRIENDS = 'quantum_network/friends/SET_FRIENDS';
const SET_CURRENT_PAGE = 'quantum_network/friends/SET_CURRENT_PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'quantum_network/friends/SET_TOTAL_FRIENDS_COUNT';
const TOGGLE_IS_FETCHING = 'quantum_network/friends/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'quantum_network/friends/TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  friends: [],
  pageSize: 100,
  totalFriendsCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
  fake: 10,
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'quantum_network/friends/ADD_FRIEND':
      return {
        ...state,
        friends: updateObjectInArray(state.friends, action.userId, 'id', { followed: true })
      };
    case 'quantum_network/friends/UNFRIEND':
      return {
        ...state,
        friends: updateObjectInArray(state.friends, action.userId, 'id', { followed: false })
      };
    case 'quantum_network/friends/SET_FRIENDS':
      return { ...state, friends: action.friends };
    case 'quantum_network/friends/SET_CURRENT_PAGE':
      return { ...state, currentPage: action.pageNumber };
    case 'quantum_network/friends/SET_TOTAL_FRIENDS_COUNT':
      return { ...state, totalFriendsCount: action.totalCount };
    case 'quantum_network/friends/TOGGLE_IS_FETCHING':
      return { ...state, isFetching: action.isFetching };
    case 'quantum_network/friends/TOGGLE_IS_FOLLOWING_PROGRESS':
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


export const requestFriends = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(toggleIsFetching(true));

    const data = await usersAPI.getFriends(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setFriends(data.items));
    dispatch(setTotalFriendsCount(data.totalCount));
  }
}

export const addFriend = (userId) => {
  return async (dispatch) => {
    addFriendUnfriendFlow(dispatch, userId, usersAPI.addFriend.bind(userId), addFriendSuccess);
  }
}

export const unfriend = (userId) => {
  return async (dispatch) => {
    addFriendUnfriendFlow(dispatch, userId, usersAPI.unfriend.bind(userId), unfriendSuccess);
  }
}

const addFriendUnfriendFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));

  const data = await apiMethod(userId);

  if (data.resultCode === 0) dispatch(actionCreator(userId));
  dispatch(toggleFollowingProgress(false, userId));
}

export default friendsReducer;