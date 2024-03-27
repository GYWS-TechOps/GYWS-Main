import "./card.css";
import { Linkedin, Facebook, EnvelopeFill } from 'react-bootstrap-icons'

function card({ imageUrl, name, position, facebookLink, email, linkedinLink, data }) {
  return (
    <>
      <div className="members_card">
        <div className="members_card_image">
          <img src={imageUrl} alt="member" srcset="" />

        </div>
        <div className="members_card_info">
          <h3 className="members_name">{name}</h3>
          <p className="members_designation">{position}</p>
          <div className="members_social_links">
            <a
              href={facebookLink}
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
            <a
              href={`mailto:${email}`}
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <EnvelopeFill />
            </a>
            <a
              href={linkedinLink}
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default card;
