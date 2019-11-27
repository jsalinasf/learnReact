import React from "react";

const PersonInfo = () => {
  return (
    <div>
      <h1 className="red text-center underline">Peter Parker</h1>
      <p>
        Spider-Man is a fictional superhero created by writer-editor Stan Lee
        and writer-artist Steve Ditko. He first appeared in the anthology comic
        book Amazing Fantasy #15 in the Silver Age of Comic Books
      </p>
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

export default PersonInfo;
