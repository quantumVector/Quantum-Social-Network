import React from 'react';
import ProfilePage from './ProfilePage.jsx';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';

// http://backend-quantum-social-network/scripts/get_profile.php?id=${userId} - Путь к нашему серверу

class ProfilePageContainer extends React.Component {
  componentDidMount = () => {
    //let userId = this.props.match.params.userId || 13527;
    let userId = this.props.match.params.userId || this.props.authorizedUserId;

    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return <ProfilePage {...this.props} profile={this.props.profile}
      status={this.props.status}
      updateStatus={this.props.updateStatus} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect,
)(ProfilePageContainer);