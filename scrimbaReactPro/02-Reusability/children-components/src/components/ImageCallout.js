import React from "react";

function ImageCallout(props) {
  return (
    <div className="callout">
      <img src={props.img} width="100%" alt="strawberries over table" />
      <figcaption>{props.caption}</figcaption>
    </div>
  );
}

export default ImageCallout;
