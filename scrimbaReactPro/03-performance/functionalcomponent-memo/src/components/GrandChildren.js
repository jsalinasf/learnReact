import React from 'react';

const GrandChildren = props => {
  console.log('[ ]   [ ]   [ ]   [👶🏻] rendered');
  return (
    <div>
      <h2>GrandChildren</h2>
    </div>
  );
};

export default React.memo(GrandChildren);
