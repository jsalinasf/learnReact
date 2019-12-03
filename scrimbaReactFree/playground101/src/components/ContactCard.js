import React from "react";

const ContactCard = props => {
  return (
    <div className="cardFormat">
      <img src="{props.url}" className="cardFormatImg"></img>
      <h3>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
    </div>
  );
};

export default ContactCard;
