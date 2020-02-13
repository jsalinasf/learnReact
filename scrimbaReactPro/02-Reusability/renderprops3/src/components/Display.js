import React from 'react';

function Display(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.loading ? 'Loading...' : 'Here is the info:'}</h1>
      <p>{JSON.stringify(props.data)}</p>
    </div>
  );
}

export default Display;
