import React, { Component } from 'react';
import GrandChildren from './GrandChildren';

class Child extends Component {
  render() {
    console.log('[ ]   [ ]   [🧒🏻]   [ ] rendered');
    return (
      <div>
        <h2>Child</h2>
        <GrandChildren />
        <GrandChildren />
      </div>
    );
  }
}

export default Child;
