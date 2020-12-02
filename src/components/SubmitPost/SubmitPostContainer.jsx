import React from 'react';
import { addPostActionCreator } from '../../redux/postReducer';
import SubmitPost from './SubmitPost.jsx';


const SubmitPostContainer = (props) => {
  const addPost = (newPostElem) => {
    const action = addPostActionCreator(newPostElem.current.value);

    props.dispatch(action);
    newPostElem.current.value = '';
  }

  return <SubmitPost addPost={addPost} profile={props.profile} />
}

export default SubmitPostContainer;