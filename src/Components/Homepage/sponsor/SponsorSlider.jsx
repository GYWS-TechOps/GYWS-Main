import "./SponsorSlider.css";
import SponsorItem from "./SponsorItem";
import HCard from "../../HeaderCard/HCard";
import { sponsorsData, affiliationsData } from "./data/sponsorData";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false, infinite: true, slidesToShow: 5, slidesToScroll: 1, initialSlide: 0, arrow: true, autoplay: true, speed: 500, autoplaySpeed: 3000, pauseOnHover: true,

  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4, } },
    { breakpoint: 768, settings: { slidesToShow: 3, }, },
    { breakpoint: 500, settings: { slidesToShow: 2, }, },
  ],
};

function SponsorsSlider() {

  return (
    <>
      <div className="sliders-container">
        <div className="container-slider">
          <HCard head={"SPONSORS"}></HCard>
          <div className="sliderContainer">
            <Slider {...settings}>
              {sponsorsData.map((sponsor, index) => (
                <SponsorItem
                  key={index}
                  sponsor={sponsor}
                />
              ))}
            </Slider>
          </div>
        </div>

        <div className="container-slider">
          <HCard head={"AFFILIATIONS"}></HCard>
          <div className="sliderContainer">
            <Slider {...settings}>
              {affiliationsData.map((sponsor, index) => (
                <SponsorItem
                  key={index}
                  sponsor={sponsor}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default SponsorsSlider;