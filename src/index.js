import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';
import store from './redux/reduxStore';
import { Provider } from './StoreContext';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App state={state} />
      </Provider>
    </React.StrictMode>, document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  const state = store.getState();

  rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
