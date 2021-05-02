import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
  state = {
    editeMode: false,
    title: 'Yo',
  }

  activateEditMode = () => {
    this.setState({
      editeMode: true,
    });
  }

  deactivateEditMode = () => {
    this.setState({
      editeMode: false,
    });
  }

  render() {
    return (
      <div className={classes.status}>
        {!this.state.editeMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        }
        {this.state.editeMode &&
          <div>
            <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} />
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;