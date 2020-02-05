import React, { Component } from 'react';
import { withToggle } from '../../../deleteme/src/hocs/withToggler';

class Menu extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.toggle}>
          {this.props.on ? 'Hide' : 'Show'} Menu
        </button>
        <nav style={{ display: this.props.on ? 'block' : 'none' }}>
          <h6>Signed in as Coder123</h6>
          {/* eslint-disable-next-line */}
          <a>Your Profile</a>
          {/* eslint-disable-next-line */}
          <a>Your Repositories</a>
          {/* eslint-disable-next-line */}
          <a>Your Stars</a>
          {/* eslint-disable-next-line */}
          <a>Your Gists</a>
        </nav>
      </div>
    );
  }
}

export default withToggle(Menu, { defaultOnValue: true });
