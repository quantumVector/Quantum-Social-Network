import React from 'react';
import ProfilePage from './ProfilePage.jsx';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api.js';

// http://backend-quantum-social-network/scripts/get_profile.php?id=${userId} - Путь к нашему серверу

class ProfilePageContainer extends React.Component {
  componentDidMount = () => {
    let userId = this.props.match.params.userId || 13527;

    profileAPI.setUserProfile(userId).then(data => {
      this.props.setUserProfile(data);
    });
  }

  render() {
    return <ProfilePage {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let withUrlDataContainerComponent = withRouter(ProfilePageContainer);

export default connect(mapStateToProps, { setUserProfile })(withUrlDataContainerComponent);