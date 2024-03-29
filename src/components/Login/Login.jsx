import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { createField, Input } from '../common/FormsControls/FormsControls';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router';
import classes from '../common/FormsControls/FormsControls.module.css';

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', Input, [required])}
      {createField('Password', 'password', Input, [required], { type: 'password' })}
      {createField(null, 'rememberMe', Input, null, { type: 'checkbox' }, ' remember me')}
      {captchaUrl && <img src={captchaUrl} alt='captcha' />}
      {captchaUrl && createField("Symbols from image", "captcha", Input, [required])}
      {
        error && <div className={classes.formSummaryError}>
          {error}
        </div>
      }
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = ({ login, isAuth, captchaUrl }) => {
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }

  if (isAuth) {
    return <Redirect to={'/profile'} />
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
  </div>
}

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);