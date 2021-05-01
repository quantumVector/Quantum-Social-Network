import { applyMiddleware, createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import friendsOnlineReducer from './friendsOnlineReducer';
import chatReducer from './chatReducer';
import usersReducer from './usersReducer';
import followingReducer from './followingReducer';
import eventsReducer from './eventsReducer';
import friendsReducer from './friendsReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
  profilePage: profileReducer,
  posts: postReducer,
  friendsOnline: friendsOnlineReducer,
  users: usersReducer,
  following: followingReducer,
  events: eventsReducer,
  chat: chatReducer,
  friendsPage: friendsReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;