import React from 'react';
import ProfilePage from './ProfilePage.jsx';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, savePhoto, updateStatus, saveProfileInfo } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

// http://backend-quantum-social-network/scripts/get_profile.php?id=${userId} - Путь к нашему серверу

class ProfilePageContainer extends React.Component {
  refreshProfile = () => {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.authorizedUserId;

      if (!userId) {
        this.props.history.push("/login");
      }
    }

    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount = () => {
    this.refreshProfile();
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return <ProfilePage {...this.props}
      isOwner={!this.props.match.params.userId}
      profile={this.props.profile}
      status={this.props.status}
      updateStatus={this.props.updateStatus}
      savePhoto={this.props.savePhoto} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfileInfo }),
  withRouter,
)(ProfilePageContainer);