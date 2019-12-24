import React from "react";
import image01 from "../img/spiderman01.jpg";

const MainContent = () => {
  let dynamicStyle = {
    border: "5px solid red",
    display: "block",
    position: "relative",
    left: "50%",
    transform: "translate(-50%, 0)"
  };

  return (
    <div>
      <p>
        Spider-Man is a fictional superhero created by writer-editor Stan Lee
        and writer-artist Steve Ditko. He first appeared in the anthology comic
        book Amazing Fantasy #15 in the Silver Age of Comic Books
      </p>
      <img src={image01} alt="Spider-Man" style={dynamicStyle}></img>
      <p>
        For more information please visit:{" "}
        <a href="https://en.wikipedia.org/wiki/Spider-Man">Wikipedia Link</a>
      </p>
      <p>Here is a short list of Spider-Man comics:</p>
      <ul>
        <li>Amazing Spider-Man</li>
        <li>Friendly Neighborhood Spider-Man</li>
        <li>Ultimate Spider-Man</li>
        <li>Web of Spider-Man</li>
      </ul>
    </div>
  );
};

export default MainContent;
