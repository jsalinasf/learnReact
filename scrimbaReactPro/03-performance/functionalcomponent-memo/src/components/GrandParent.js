import React from 'react';
import Parent from './Parent';

const GrandParent = props => {
  console.log('[👴🏼]   [ ]   [ ]   [ ] rendered');
  return (
    <div>
      <h2>GrandParent</h2>
      <Parent />
      <Parent />
    </div>
  );
};

export default GrandParent;
