import React from 'react';
import MessageItemFriend from '../MessageItemFriend/MessageItemFriend.jsx';
import MessageItemMy from '../MessageItemMy/MessageItemMy.jsx';
import { addMessageActionCreator } from '../../redux/chatReducer';
import Chat from './Chat.jsx';

const ChatContainer = (props) => {
  const messages = props.chat.AshleyWilliams.messages.map( msg => {
    if (msg.from === 'friend') return <MessageItemFriend photo={msg.photo} msg={msg.text} time={msg.time} />
    if (msg.from === 'me') return <MessageItemMy photo={msg.photo} msg={msg.text} time={msg.time} />
  });

  const sendMessage = (newMessage) => {
    const action = addMessageActionCreator(newMessage.current.value)
    console.log(action)

    props.dispatch(action);
    newMessage.current.value = '';
  }

  return <Chat sendMessage={sendMessage} messages={messages} />
}

export default ChatContainer;