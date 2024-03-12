import impcss from "./impact.module.css";
import HCard from "../../HeaderCard/HCard";

export default function Impact() {
  return (
    <>
      <HCard head={"IMPACT"}></HCard>
      <div className={impcss.container}>
        <div className={impcss.mycontainer}>
          <div className={impcss.mainbox} id={impcss.first}>
            <div>
              <img src="./images/child.jpg" alt="" />
            </div>
            <h2>500+</h2>
            <div className={impcss.discr}>
              Student's life got changed, being provided with free of cost
              education.
            </div>
          </div>

          <div className={impcss.mainbox} id={impcss.second}>
            <div>
              <img src="./images/map.png" alt="" />
            </div>
            <h2>16</h2>
            <div className={impcss.discr}>
              GYWS run LiGHT centers in different part of India.
            </div>
          </div>
        </div> 
        <div className={impcss.mycontainer}>
          <div className={impcss.mainbox} id={impcss.third}>
            <div>
              <img src="./images/child1.jpg" alt="" />
            </div>
            <h2>5000+</h2>
            <div className={impcss.discr}>Masks were distributed.</div>
          </div>

          <div className={impcss.mainbox} id={impcss.fourth}>
            <div>
              <img src="./images/DSC_0159.JPG" alt="" />
            </div>
            <h2>2000+</h2>
            <div className={impcss.discr}>Needy families got food kits</div>
          </div>
        </div>
      </div>
    </>
  );
}
