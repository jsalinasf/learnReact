import React from 'react';
import Child from './Child';

// In here Im using another form to use React.memo()

export default React.memo(function Parent(props) {
  console.log('[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered');
  return (
    <div>
      <h2>Parent</h2>
      <Child />
      <Child />
    </div>
  );
});
