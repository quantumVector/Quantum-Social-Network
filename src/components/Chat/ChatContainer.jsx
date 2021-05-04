import React from 'react';
import { connect } from 'react-redux';
import MessageItemFriend from '../MessageItemFriend/MessageItemFriend.jsx';
import MessageItemMy from '../MessageItemMy/MessageItemMy.jsx';
import { addMessageActionCreator } from '../../redux/chatReducer';
import Chat from './Chat.jsx';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  const messages = state.chat.AshleyWilliams.messages.map(msg => {
    if (msg.from === 'friend') return <MessageItemFriend photo={msg.photo} msg={msg.text} time={msg.time} />
    if (msg.from === 'me') return <MessageItemMy photo={msg.photo} msg={msg.text} time={msg.time} />
  });

  return {
    messages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => {
      dispatch(addMessageActionCreator(message));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Chat);