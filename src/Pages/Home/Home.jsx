import { useEffect } from "react";
import MissionVision from "../../Components/Homepage/mission_vision/MissionVision";
import Intiative from "../../Components/Homepage/intiatives/Intiative";
import Slider from "../../Components/Homepage/slider/Slider";
import GuestPage from "../../Components/Homepage/GuestPage/Guest";
import FeedIndia from "../../Components/Homepage/FeedIndia/feedindia";
import Impact from "../../Components/Homepage/impact/Impact";
import ContactUs from "../../Components/Homepage/ContactUs/ContactUs";
import Carousel from "../../Components/Homepage/sponsor/SponsorSlider"
import TestiMonial from "../../Components/Homepage/Testimonial/Testimonial";
// import SomeChildComponent from "../../utils/someChildComponent/SomeChildComponent";

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Home | GYWS";

  }, [])

  return (
    <>
      <div className="home-page-container">
        <Slider />
        <MissionVision />
        <Intiative />
        <Impact />
        <TestiMonial />
        <FeedIndia />
        <GuestPage />
        <Carousel />
        <ContactUs />
        {/* <SomeChildComponent /> */}
      </div>
    </>
  );
}

export default Home;
