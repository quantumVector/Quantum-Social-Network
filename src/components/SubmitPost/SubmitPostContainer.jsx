import React from 'react';
import { addPostActionCreator, updateSubmitTextCreator } from '../../redux/postReducer';
import StoreContext from '../../StoreContext';
import SubmitPost from './SubmitPost.jsx';


const SubmitPostContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState();

          const addPost = () => {
            const action = addPostActionCreator();

            store.dispatch(action);
          }

          const updateSubmitText = (text) => {
            const action = updateSubmitTextCreator(text);

            store.dispatch(action);
          }

          return <SubmitPost
            addPost={addPost}
            profile={state.profile}
            updateSubmitText={updateSubmitText}
            currentTextMessage={state.posts.currentTextPost} />
        }
      }
    </StoreContext.Consumer>
  )
}

export default SubmitPostContainer;