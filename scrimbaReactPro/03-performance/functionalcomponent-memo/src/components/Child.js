import React, { memo } from 'react';
import GrandChildren from './GrandChildren';

// In here Im using another form to use React.memo()

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

export default memo(Child);
