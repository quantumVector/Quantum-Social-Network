import React from 'react';
import { connect } from 'react-redux';
import MessageItemFriend from '../MessageItemFriend/MessageItemFriend.jsx';
import MessageItemMy from '../MessageItemMy/MessageItemMy.jsx';
import { addMessageActionCreator, updateCurrentTextMessageCreator } from '../../redux/chatReducer';
import Chat from './Chat.jsx';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
  const messages = state.chat.AshleyWilliams.messages.map(msg => {
    if (msg.from === 'friend') return <MessageItemFriend photo={msg.photo} msg={msg.text} time={msg.time} />
    if (msg.from === 'me') return <MessageItemMy photo={msg.photo} msg={msg.text} time={msg.time} />
  });

  return {
    currentTextMessage: state.chat.currentTextMessage,
    messages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateMessage: (text) => {
      dispatch(updateCurrentTextMessageCreator(text));
    }
  }
}

let AuthRedirectComponent = withAuthRedirect(Chat);

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default ChatContainer;