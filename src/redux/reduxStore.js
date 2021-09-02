import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
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
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';

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
  form: formReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

window.__store__ = store;

export default store;