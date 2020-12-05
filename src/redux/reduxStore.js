import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import friendsOnlineReducer from './friendsOnlineReducer';
import chatReducer from './chatReducer';
import usersReducer from './usersReducer';
import followingReducer from './followingReducer';
import eventsReducer from './eventsReducer';

const reducers = combineReducers({
  profile: profileReducer,
  posts: postReducer,
  friendsOnline: friendsOnlineReducer,
  users: usersReducer,
  following: followingReducer,
  events: eventsReducer,
  chat: chatReducer,
});

const store = createStore(reducers);

export default store;