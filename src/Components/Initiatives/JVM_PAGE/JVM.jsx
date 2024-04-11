import "./JVM.css";
import LiGHTImg from "./LiGHT-img.png";
import { useEffect } from "react";
import HCard from "../../HeaderCard/HCard";


const jvmData = [
  {
    imgPath: "./images/school_logo-removebg-preview.png",
    content:
      "JVM was established in April, 2008. It's an initiative of Gopali Youth Welfare Society. It's main motto is to educate each and every child for a better tomorrow.",
  },
  {
    imgPath: "./images/child_logo-removebg-preview.png",
    content:
      "It is located in Tangasool village, 1.5 kilometers from Salua Air Force Station which in turn is 5 kilometers away from IIT Kharagpur campus.",
  },
  {
    imgPath: "./images/teachers_logo-removebg-preview.png",
    content:
      "At present, our school provides English Medium education up to 5th standard and 240+ students are enrolled from nursery to 5th standard and 11+ teachers.",
  },
];

const eventsData = [
  {
    name: "Aashayein",
    imgPath: "./images/aashayein.JPG",
  },
  {
    name: "Sports Day",
    imgPath: "./images/sportsday.jpeg",
  },
  {
    name: "Republic Day",
    imgPath: "./images/republicday.jpeg",
  },
  {
    name: "Kshitij Visit",
    imgPath: "./images/ktjvisit.jpeg",
  },
];

const surveyData = [
  {
    number: 25,
    info: "Teacher training sessions Conducted",
  },
  {
    number: 410,
    info: "Students",
  },
  {
    number: 10,
    info: "Students Rescued from child Labour",
  },
  {
    number: 100,
    info: "People attend the Computer Workshop",
  },
  {
    number: 25,
    info: "Cycles Donated",
  },
  {
    number: 110,
    info: "Women Attended the Tailoring workshop",
  },
  {
    number: 1000,
    info: "Potential Blood Donors Database",
  },
  {
    number: 11,
    info: "Centers",
  },
];

const JVMCard = ({ imgPath, content }) => {
  return (
    <>
      <div className="jvm-section-content-card">
        <img src={imgPath} alt="not found" />
        <p>{content}</p>
      </div>
    </>
  );
};

const EventCard = ({ name, imgPath }) => {
  return (
    <>
      <div className="event-gallery-card">
        <div className="event-gallery-card-img">
          <img src={imgPath} alt="Event Img" />
        </div>
        <p>{name}</p>
      </div>
    </>
  );

};

const SurveyStatsCard = ({ number, info }) => {
  return (
    <>
      <div className="stats">
        <h2>{number}</h2>
        <p>{info}</p>
      </div>
    </>
  );
};

export default function JVM() {



  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Initiatives | GYWS"

  }, [])

  return (
    <>
      <div className="jvm-container">
        <div className="jvm-header">
          <div className="bgImg">
            {/* <img src={"/assets/images/initiative/bgImg.jpg"} alt="" /> */}
            <img src={"/assets/images/initiative/main.jpg"} alt="" />
            {/* <img src={bgImg} alt="" /> */}
          </div>
          <div className="jvm-header-content">
            <h2> Jagriti Vidya Mandir</h2>
            <h2>Gopali Youth Welfare Society </h2>
          </div>
        </div>

        <div className="jvm-details">


          <HCard head={"JVM"}> </HCard>


          <div className="jvm-section-content">
            {jvmData.map((item) => {
              return (
                <JVMCard
                  title={item.title}
                  imgPath={item.imgPath}
                  content={item.content}
                />
              );
            })}
          </div>
        </div>

        {/* LiGHT */}

        <div className="LiGHT">

          <HCard head={"LiGHT"}></HCard>


          <div className="lecture-container">
            <div className="lecture-content">
              <div>
                LiGHT is the expansion initiative of GYWS, in which we aim to build a network of autonomous student-run centers across India that help the youth of our country get involved in social problem-solving and promote a positive change mindset, providing them with a platform to ensure the fulfillment of Sustainable Development Goals for the weaker sections of the society. At present, there are 13+ LiGHT centers operating across different parts of India.
              </div>
              <div className="LiGHT-button">
                <a href="https://light.org.in" target="_blank" rel="noreferrer noopener" className="button">Visit Page</a>
              </div>
            </div>

            <div className="lecture-img light-section">
              <img style={{backgroundColor: 'white'}} src={LiGHTImg} alt="#" />
            </div>
          </div>
        </div>

        <div className="jvm-lecture">

          <HCard head={"Future Plans"}></HCard>


          <div className="lecture-container-jvm">
            <div className="lecture-img">
              <img src="./images/futureplan.png" alt="#" />
            </div>

            <div className="lecture-content">
              JVM aspires to be a residential full-fledged school for students
              of under privileged families offering a variety of courses at +2
              level, vocational training and career guidance. We seek to take
              Jagriti Vidya Mandir to beyond its current primary level to
              complete school cum hostel Catering to the needs of over 500
              students. The facility will not only provide education up to 12th
              grade, but will also take responsibility for ensuring that its
              students settle in their professional or educational lives before
              they leave.
            </div>
          </div>
        </div>

        <div className="event-details">

          <HCard head={"Events"}></HCard>


          <div className="event-gallery">
            {eventsData.map((item) => {
              return <EventCard name={item.name} imgPath={item.imgPath} />;
            })}
          </div>
        </div>

        <div className="jvm-survey">

          <HCard head={"Survey Stats"}></HCard>


          <div className="survey-stats">
            {surveyData.map((item) => {
              return <SurveyStatsCard number={item.number} info={item.info} />;
            })}
          </div>


        </div>
      </div>
    </>
  );
}
