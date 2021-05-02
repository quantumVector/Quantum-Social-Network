import React from 'react';
import ProfilePage from './ProfilePage.jsx';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

// http://backend-quantum-social-network/scripts/get_profile.php?id=${userId} - Путь к нашему серверу

class ProfilePageContainer extends React.Component {
  componentDidMount = () => {
    let userId = this.props.match.params.userId || 13527;

    this.props.getUserProfile(userId);
  }

  render() {
    return <ProfilePage {...this.props} profile={this.props.profile} />
  }
}
let AuthRedirectComponent = withAuthRedirect(ProfilePageContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(withUrlDataContainerComponent);