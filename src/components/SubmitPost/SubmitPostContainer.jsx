import React from 'react';
import { addPostActionCreator, updateSubmitTextCreator } from '../../redux/postReducer';
import SubmitPost from './SubmitPost.jsx';


const SubmitPostContainer = (props) => {
  const addPost = () => {
    const action = addPostActionCreator();

    props.dispatch(action);
  }

  const updateSubmitText = (text) => {
    const action = updateSubmitTextCreator(text);

    props.dispatch(action);
  }

  return <SubmitPost
    addPost={addPost}
    profile={props.profile}
    updateSubmitText={updateSubmitText}
    currentTextMessage={props.posts.currentTextPost} />
}

export default SubmitPostContainer;