import React from 'react';
import MessageItemFriend from '../MessageItemFriend/MessageItemFriend.jsx';
import MessageItemMy from '../MessageItemMy/MessageItemMy.jsx';
import { addMessageActionCreator, updateCurrentTextMessageCreator } from '../../redux/chatReducer';
import Chat from './Chat.jsx';

const ChatContainer = (props) => {
  const messages = props.chat.AshleyWilliams.messages.map( msg => {
    if (msg.from === 'friend') return <MessageItemFriend photo={msg.photo} msg={msg.text} time={msg.time} />
    if (msg.from === 'me') return <MessageItemMy photo={msg.photo} msg={msg.text} time={msg.time} />
  });

  const sendMessage = () => {
    const action = addMessageActionCreator();

    props.dispatch(action);
  }

  const updateMessage = (text) => {
    const action = updateCurrentTextMessageCreator(text);

    props.dispatch(action);
  }

  return <Chat sendMessage={sendMessage}
    messages={messages}
    updateMessage={updateMessage}
    currentTextMessage={props.chat.currentTextMessage} />
}

export default ChatContainer;