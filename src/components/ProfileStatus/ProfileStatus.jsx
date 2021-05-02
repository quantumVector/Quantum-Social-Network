import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
  state = {
    editeMode: false,
    status: this.props.status,
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
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  }

  render() {
    return (
      <div className={classes.status}>
        {!this.state.editeMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || '------------'}</span>
          </div>
        }
        {this.state.editeMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;