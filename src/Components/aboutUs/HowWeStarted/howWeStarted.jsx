import './HowWeStarted.css';
import HCard from '../../HeaderCard/HCard';


const HowWeStarted = () => {
  return (
    <div className="how-we-started-container">
      <div className="how-we-started-heading">
        <HCard head={"HOW WE STARTED"} ></HCard>
      </div>
      <div className="how-we-started-about">
        <div className="how-we-started-text">
          <div className='texts texts1'>
            Mr. Mrinal Kanti Bhanja , or Dada as we call him , in his early twenties had the vision to give back to society by helping in uplifting the less fortunate . When he came across a few IITians who wanted to volunteer for a good cause but lacked the right platform- Gopali Youth Welfare Society came into being.
          </div>
          <div className='texts' >
            Together, the Young Samaritans along with some Professors of IIT Kharagpur set on this journey and through the years GYWS has not just been instrumental in providing primary education to children at JVM, but has also undertaken different social initiatives to uplift the society! In Dada's own words <b> “GYWS is aiding social, economic and cultural development of weaker sections of society while encouraging people to seek solutions to their everyday problems within locally available resources!”</b>
          </div>
        </div>
        <div className="how-we-started-img">
          <img src="\assets\images\aboutus\runningboy.jpg" alt="Child" />
        </div>
      </div>
    </div>
  );
};

export default HowWeStarted;