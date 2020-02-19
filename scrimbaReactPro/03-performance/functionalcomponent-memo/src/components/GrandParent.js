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

// function areEqual(prevProps, nextProps) {
//   /*
//   this function will be passed to React.memo()
//   return true if nextProps == prevProps
//   if true Component won't get rendered again
//   */
//   return true;
// }

// React Memo uses High Order Components HOCs
export default React.memo(GrandParent);
// export default React.memo(GrandParent, areEqual);
