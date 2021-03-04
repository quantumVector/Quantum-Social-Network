import React from 'react';
import ProfilePage from './ProfilePage.jsx';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';

class ProfilePageContainer extends React.Component {
  componentDidMount = () => {
    axios.get(`http://backend-quantum-social-network/scripts/get_profile.php?id=3`).then(response => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return <ProfilePage {...this.props} profile={this.props.profile} />
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(ProfilePageContainer);