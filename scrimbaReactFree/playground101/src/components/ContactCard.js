import React from "react";

const ContactCard = props => {
  return (
    <div className="cardFormat">
      <img src={props.contact.imgUrl} className="cardFormatImg" alt="little cat meowing"></img>
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.phone}</p>
      <p>Email: {props.contact.email}</p>
    </div>
  );
};

export default ContactCard;
