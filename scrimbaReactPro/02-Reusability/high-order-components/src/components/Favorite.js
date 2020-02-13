// import React, { Component } from 'react';

import React from 'react';
import { withToggler } from '../hocs/withToggler';

function Favorite(props) {
  return (
    <div>
      <h3>Click heart to favorite</h3>
      <h1>
        <span onClick={props.toggle}>{props.on ? '❤️' : '♡'}</span>
      </h1>
    </div>
  );
}

export default withToggler(Favorite, { defaulOnValue: false });

// I switched from class component to functional component as part of the exercise
//
// class Favorite extends Component {
//   render() {
//     return (
//       <div>
//         <h3>Click heart to favorite</h3>
//         <h1>
//           <span onClick={this.props.toggle}>{this.props.on ? '❤️' : '♡'}</span>
//         </h1>
//       </div>
//     );
//   }
// }