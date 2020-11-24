import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, addMassage } from './state/state';

export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMassage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}