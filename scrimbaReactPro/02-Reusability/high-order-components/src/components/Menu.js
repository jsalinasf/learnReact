// import React, { Component } from 'react';
import React from 'react';
import { withToggler } from '../hocs/withToggler';

function Menu(props) {
  return (
    <div>
      <button onClick={props.toggle}>{props.on ? 'Hide' : 'Show'} Menu </button>
      <nav style={{ display: props.on ? 'block' : 'none' }}>
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

export default withToggler(Menu, { defaulOnValue: true });

// I switched from class component to functional component as part of the exercise
//
// class Menu extends Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.toggle}>
//           {this.props.on ? 'Hide' : 'Show'} Menu{' '}
//         </button>
//         <nav style={{ display: this.props.on ? 'block' : 'none' }}>
//           <h6>Signed in as Coder123</h6>
//           {/* eslint-disable-next-line */}
//           <a>Your Profile</a>
//           {/* eslint-disable-next-line */}
//           <a>Your Repositories</a>
//           {/* eslint-disable-next-line */}
//           <a>Your Stars</a>
//           {/* eslint-disable-next-line */}
//           <a>Your Gists</a>
//         </nav>
//       </div>
//     );
//   }
// }
