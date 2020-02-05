import React, { Component } from 'react';
import { withToggler } from '../hocs/withToggler';

class Menu extends Component {
  state = {
    show: true
  };

  toggleShow = () => {
    this.setState(prevState => {
      return {
        show: !prevState.show
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>
          {this.state.show ? 'Hide' : 'Show'} Menu{' '}
        </button>
        <nav style={{ display: this.state.show ? 'block' : 'none' }}>
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

export default withToggler(Menu);
