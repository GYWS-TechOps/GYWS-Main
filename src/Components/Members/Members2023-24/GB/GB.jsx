import React from "react";
import "./GB.css";
import Card from "../Card/card";
import HCard from "../../../HeaderCard/HCard.jsx";
import data from './GB.js'
export default function GB() {


  return (
    <>
      <HCard head={"Governing Body Members 2023-24"}></HCard>
      <div className="members_container">
        {data.map((data, index) => (
          <Card
            key={index}
            name={data.name}
            position={data.position}
            imageUrl={data.imageUrl}
            facebookLink={data.facebookLink}
            email={data.email}
            linkedinLink={data.linkedinLink}
            data={data}
          />
        ))}
      </div>
    </>
  );
}
