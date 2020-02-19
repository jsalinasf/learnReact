import React from 'react';
import Child from './Child';

const Parent = props => {
  console.log('[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered');
  return (
    <div>
      <h2>Parent</h2>
      <Child />
      <Child />
    </div>
  );
};

export default Parent;
