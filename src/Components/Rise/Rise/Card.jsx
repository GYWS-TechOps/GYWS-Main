import React from 'react';


const Card = ({ src, title, description, color,direction,titlecolor }) => {
  return (
    <div className={`card ${color} ${direction}`}>
      <img className="cardimage" src={src} alt="" />
      <div className="cardtext">
        <div className={`cardtitle ${titlecolor}`}>{title}</div>
        <div className="carddescription">{description}</div>
      </div>
    </div>
  );
};

export default Card;
