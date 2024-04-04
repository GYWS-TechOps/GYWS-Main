import inticss from "./intiative.module.css";
import jvmlogo from "./images/JVM.jpg";
import lightlogo from "./images/light a.jpg";
import covidlogo from "./images/Covid 19 a.jpg";
import HCard from "../../HeaderCard/HCard";
import { Link } from "react-router-dom";


export default function intiative() {
  return (
    <div className={inticss.outerContainer}>
      <HCard head={"OUR INITIATIVES"}></HCard>
      <div className={inticss.container}>
        <div className={inticss.box}>
          <div className={inticss.name}>
            <div style={{ color: "#05A1C7" }}>JAGRITI VIDYA MANDIR</div>
          </div>
          <div className={inticss.mainbox} id={inticss.first}>
            <div className={inticss.image}>
              <img src={jvmlogo} alt="" />
            </div>
            <div className={inticss.discr} style={{fontStyle: "italic"}}>
              {" "}
              To educate each and every child for a better tomorrow.
            </div>
            <div className={inticss.discr}>
              <span className={inticss.number}>500+ </span>  Student's life got
              changed, being provided with free of cost education
            </div>
            <button
              style={{
                backgroundColor: "#05A1C7",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/jvm"
              >
                Read More{" "}
              </Link>{" "}
            </button>
          </div>
        </div>
        <div className={inticss.box}>
          <div className={inticss.name}>
            <div style={{ color: "#F16A36" }}> COVID-19 </div>
          </div>
          <div className={inticss.mainbox} id={inticss.third}>
            <div className={inticss.image}>
              <img src={covidlogo} alt="" />
            </div>
            <div className={inticss.discr} style={{fontStyle: "italic"}}>
              Door to door distribution of basic amenities to the rural
              households.
            </div>
            <div className={inticss.discr}>
              <span className={inticss.number}>5000+ </span>
              Masks were distributed</div>
            <div className={inticss.discr}>
              <span className={inticss.number}>2000+ </span>
              Needy families got food kits</div>
          </div>
        </div>
        <div className={inticss.box}>
          <div className={inticss.name}>
            <div style={{ color: "#fed136 " }}>LiGHT </div>
          </div>
          <div className={inticss.mainbox} id={inticss.middle}>
            <div className={inticss.image}>
              <img src={lightlogo} alt="" />
            </div>
            <div className={inticss.discr} style={{fontStyle: "italic"}}>
              Expansion Initiative - forming a PAN India network of socially
              motivated youth.
            </div>
            <div className={inticss.discr}>
              <span className={inticss.number}>12+ </span>
              Student run centers</div>
            <button>
              <a
                style={{ textDecoration: "none", color: "#070707" }}
                href="https://light.org.in/"
              >
                Visit Now{" "}
              </a>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
