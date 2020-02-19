import React from 'react';
import GrandChildren from './GrandChildren';

const Child = props => {
  console.log('[ ]   [ ]   [🧒🏻]   [ ] rendered');
  return (
    <div>
      <h2>Child</h2>
      <GrandChildren />
      <GrandChildren />
    </div>
  );
};

export default Child;
