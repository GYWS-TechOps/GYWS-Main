import React, { useEffect } from "react";
import "./Donate.css";
import { Link } from "react-router-dom";
import TextCard from '../../Components/HeaderCard/HCard'
// import Modal from "../../Components/Donation/Modal";
// import Each from "../../Components/Donation/Each_JVMCare";
// import HostelConstruction from "../../Components/Donation/Hostel_Contruction";
// import HostelSustainability from "../../Components/Donation/Hostel_Sustainability";
// import LightDonate from "../../Components/Donation/lightdonate/LightDonate";
// import DonateModal from "../../Components/Donation/DonateModal";

const DonateLinks = [
  {
    name: "EaCH ( Educate a Child ) + JVMCare",
    imgPath: "./images/each1.jpg",
    discr:
      "EaCH ( Educate a Child ) Invite donors to Donate 8500/- per year for a child's education. JVMCare Invite donors to Donate 6000/- per year for Transportation cost",
    eventlink: "/donate/each",
    modal: "each"
  },
  {
    name: "Hostel Construction",
    imgPath: "./images/hostel_c.jpg",
    discr:
      "JVM School has hostel facility for students who come from remote areas. Hostel has 100 students capacity.",
    eventlink: "/donate/hostel_construction",
    modal: "hostelConstruction"
  },
  {
    name: "Hostel Sustainability",
    imgPath: "./images/hostel_s.jpg",
    discr:
      "JVM School has hostel facility for students who come from remote areas. Hostel has 100 students capacity.",
    eventlink: "/donate/hostel_sustainability",
    modal: "hostelsustainability"
  },
  {
    name: "LiGHT",
    imgPath: " ./images/light.jpg",
    discr:
      "LiGHT is Expantion Intiative of GWYS to reach to PAN INDIA",
    eventlink: "/donate/LiGHT",
    modal: "light"
  },
];

const DonateCard = ({ name, imgPath, discr, eventlink }) => {


  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const modalHandler = () => {
  //   setIsModalOpen(!isModalOpen);
  // }

  return (
    <>
      <div className="blog-item">
        <Link to={eventlink}>
          <div className="icon">
            <img src={imgPath} alt="" />
          </div>
          <div className="content">
            <div className="title">{name}</div>
            <div className="rounded"></div>

            <p>{discr}</p>
          </div>

          <div className="item-arrow">

            <i className="fa fa-long-arrow-right" aria-hidden="true" ></i>
          </div>
        </Link>
      </div>
    </>
  );
};

function Donate() {


  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Donate | GYWS"
  }, [])



  return (
    <>
      <div className="donate-page-container">
        {/* <DonateModal /> */}
        <br />
        <TextCard head="Donate Now"></TextCard>
        <br />
        {DonateLinks.map((data, index) => (
          <DonateCard
            key={index}
            name={data.name}
            imgPath={data.imgPath}
            discr={data.discr}
            eventlink={data.eventlink}
            modal={data.modal}
          />
        ))}

      </div>
    </>
  );
}

export default Donate;
