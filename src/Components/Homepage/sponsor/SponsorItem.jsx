import { Link } from "react-router-dom";


export default function SponsorItem({ name, logoUrl, websiteLink }) {
  return (
    <Link to={websiteLink} className="slider-card">
      <div className="slider-card-image">
        <img src={logoUrl} alt="sponsorImage" />
      </div>
      <div className="slider-card-heading">
        <h3>{name}</h3>
      </div>
    </Link>
  );
}