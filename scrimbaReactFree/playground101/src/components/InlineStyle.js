import React from "react";

const InlineStyle = () => {
  const date = new Date(2019, 11, 27, 9);
  // const hours = date.getHours();
  const hours = date.getHours();
  let grettingStr = "";

  let dynamicStyle = {
    textAlign: "center",
    fontSize: "30px"
  };

  if (hours < 12) {
    grettingStr = "Good Morning!";
    // Modifying Style on the FLY!
    dynamicStyle.backgroundColor = "yellow";
    dynamicStyle.color = "steelblue";
  } else if (hours >= 12 && hours < 18) {
    grettingStr = "Good Afternoon!";
    dynamicStyle.backgroundColor = "steelblue";
    dynamicStyle.color = "#333333";
  } else {
    grettingStr = "Good Night!";
    dynamicStyle.color = "whitesmoke";
    dynamicStyle.backgroundColor = "#333";
  }

  return (
    <div style={dynamicStyle}>
      {/* We can chang ethe style dynamically */}
      <div>{grettingStr}</div>
    </div>
  );
};

export default InlineStyle;
