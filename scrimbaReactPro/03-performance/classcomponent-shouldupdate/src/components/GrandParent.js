import React, { PureComponent } from 'react';
import Parent from './Parent';

class GrandParent extends PureComponent {
  render() {
    console.log('[👴🏼]   [ ]   [ ]   [ ] rendered');
    return (
      <div>
        <h2>GrandParent</h2>
        <Parent />
        <Parent />
      </div>
    );
  }
}

export default GrandParent;
