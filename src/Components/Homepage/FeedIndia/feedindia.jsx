import React from "react";
import "./feedindia.css";
import feedindiaimage from "./image/FeedIndia.jpg";


export default function Guest() {

  return (
    <>
      <div className="feedindiapage">
        <div className="infofeed">
          <h2 className="titlefeed">
            Gratitude to
            <span className="namefeed"> Feeding India by Zomato: </span>
            Nourishing Children's Futures
          </h2>
          <div className="guest-image hide-image">
            <img src={feedindiaimage} alt="#" />
          </div>
          <div className="descriptionfeed">
            We extend our deepest thanks to FeedIndia by Zomato for their invaluable support in providing food to children through Gyws, a student-led NGO from IIT Kharagpur. Your generosity nourishes young minds and fuels their dreams. Together, we're making a difference.

          </div>
        </div>
        <div className="guest-image">
          <img src={feedindiaimage} alt="#" />
        </div>
      </div>

    </>
  );
}