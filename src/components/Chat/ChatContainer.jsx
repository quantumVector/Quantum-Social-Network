import React from 'react';
import MessageItemFriend from '../MessageItemFriend/MessageItemFriend.jsx';
import MessageItemMy from '../MessageItemMy/MessageItemMy.jsx';
import { addMessageActionCreator, updateCurrentTextMessageCreator } from '../../redux/chatReducer';
import Chat from './Chat.jsx';
import StoreContext from '../../StoreContext.js';

const ChatContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState();

          const messages = state.chat.AshleyWilliams.messages.map(msg => {
            if (msg.from === 'friend') return <MessageItemFriend photo={msg.photo} msg={msg.text} time={msg.time} />
            if (msg.from === 'me') return <MessageItemMy photo={msg.photo} msg={msg.text} time={msg.time} />
          });

          const sendMessage = () => {
            const action = addMessageActionCreator();

            store.dispatch(action);
          }

          const updateMessage = (text) => {
            const action = updateCurrentTextMessageCreator(text);

            store.dispatch(action);
          }

          return <Chat sendMessage={sendMessage}
            messages={messages}
            updateMessage={updateMessage}
            currentTextMessage={state.chat.currentTextMessage} />
        }
      }
    </StoreContext.Consumer>
  )
}

export default ChatContainer;