import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../common/FormsControls/FormsControls";
import classes from './ProfilePageInfo.module.css';
import formStyles from "../common/FormsControls/FormsControls.module.css";

const ProfileInfoDataForm = ({ handleSubmit, profile, error }) => {
  return <form onSubmit={handleSubmit}>
    <button>save</button>
    {error && <div className={formStyles.formSummaryError}>{error}</div>}
    {createField("Full name", "fullName", Input, null)}
    {createField("", "lookingForAJob", Input, null, { type: 'checkbox' })}
    {createField("My professional skills", "lookingForAJobDescription", Textarea, null)}
    {createField("About me", "aboutMe", Textarea, null)}
    {Object.keys(profile.contacts).map(key => {
      return <div key={key}>{key}:{createField(key, "contacts." + key, Input, null)}</div>
    })}
  </form>
}

const ProfileInfoDataReduxForm = reduxForm({ form: 'edit-profile-info' })(ProfileInfoDataForm)


export default ProfileInfoDataReduxForm;