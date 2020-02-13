import React from 'react';

function Menu(props) {
  return (
    <div>
      <button onClick={props.toggle}>{props.on ? 'Hide' : 'Show'} Menu </button>
      <nav style={{ display: props.on ? 'block' : 'none' }}>
        <h6>Signed in as Coder123</h6>
        {/* eslint-disable-next-line */}
        <a>Your Profile</a>
        {/* eslint-disable-next-line */}
        <a>Your Repositories</a>
        {/* eslint-disable-next-line */}
        <a>Your Stars</a>
        {/* eslint-disable-next-line */}
        <a>Your Gists</a>
      </nav>
    </div>
  );
}

export default Menu;
