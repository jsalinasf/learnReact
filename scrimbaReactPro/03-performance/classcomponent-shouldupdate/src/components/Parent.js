import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  render() {
    console.log('[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered');
    return (
      <div>
        <h2>Parent</h2>
        <Child />
        <Child />
      </div>
    );
  }
}

export default Parent;
