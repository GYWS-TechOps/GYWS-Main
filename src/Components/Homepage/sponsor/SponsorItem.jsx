import { Link } from "react-router-dom";


export default function SponsorItem({ sponsor }) {
  return (
    <Link to={sponsor.websiteLink} className="slider-card">
      <div className="slider-card-image">
        <img src={sponsor.logoUrl} alt="sponsorImage" />
      </div>
      <div className="slider-card-heading">
        <h3>{sponsor.name}</h3>
      </div>
    </Link>
  );
}