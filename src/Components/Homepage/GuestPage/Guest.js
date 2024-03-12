import React from "react";
import "./guest.css";
import guestPhoto from "./image/SDO_AzmalHossain.jpg";


export default function Guest() {

  return (
    <>
      <div className="guestPage">
        <div className="infoGuest">
          <h2 className="titleGuest">
            GYWS is delighted to welcome Sub-Divisional Officer
            <span className="nameGuest"> Mr. Azmal Hossain </span>
            as one of its advisors!
          </h2>

          <div className="guest-image hide-image">
            <img src={guestPhoto} alt="" />
          </div>
          <div className="descriptionGuest">
            Mr Hossain was one of our Chief Guests for Aashayein 2022! Impressed
            by the initiatives undertaken by us to uplift the people of Gopali,
            Sir has agreed to guide us so that we can help an even larger
            audience and spread our vision across the nation!
          </div>
        </div>

        <div className="guest-image">
          <img src={guestPhoto} alt="" />
        </div>
      </div>
    </>
  );
}