import React from 'react';
import classes from './AddMessageForm.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Input } from '../../common/FormsControls/FormsControls';

const maxLength50 = maxLengthCreator(50);

const addMessageForm = (props) => {
  console.log(props)
  return <form className={classes.form} onSubmit={props.handleSubmit}>
    <Field className={classes.input} name={'message'}
      placeholder={'Write a message...'}
      component={Input}
      validate={[required, maxLength50]} />
    <button>Send</button>
  </form>
}

export default reduxForm({ form: 'chatAddMessage' })(addMessageForm);