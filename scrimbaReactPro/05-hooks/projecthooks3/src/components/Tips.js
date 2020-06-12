import React, { useContext } from 'react';
import { TipsContext } from '../tipsContext';

function Tips(props) {
  const { tip, selectTip } = useContext(TipsContext);
  return (
    <div>
      <button
        onClick={selectTip}
        className='btn-hints'
        disabled={props.disabled}
      >
        Hints
      </button>
      <p>{tip}</p>
    </div>
  );
}

export default Tips;
