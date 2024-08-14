import React from 'react';

const Card = ({ src, title, description, color,direction,titlecolor,btncolor,link}) => {
  return (
    <div className={`rise-card ${color} ${direction}`}>
      <img className="rise-cardimage" src={src} alt="" />
      <div className="rise-cardtext">
        <div className={`rise-cardtitle ${titlecolor}`}>{title}</div>
        <div className="rise-card_desc">{description}</div>
        <button className={`rise-btn ${btncolor}`}><a href ={link}>Event Report</a></button>
      </div>
    </div>
  );
};

export default Card;
