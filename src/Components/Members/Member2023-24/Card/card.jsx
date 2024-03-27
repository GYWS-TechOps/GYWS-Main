import "./card.css";
import { Linkedin, Facebook, EnvelopeFill } from 'react-bootstrap-icons'

function card(props) {
  return (
    <>
      <div className="members_card">
        <div className="members_card_image">
          <img src={props.imageUrl} alt="member" srcset="" />

        </div>
        <div className="members_card_info">
          <h3 className="members_name">{props.name}</h3>
          <p className="members_designation">{props.position}</p>
          <div className="members_social_links">
            <a
              href={props.facebookLink}
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>
            <a
              href={`mailto:${props.email}`}
              className=""
              target="_blank"
              rel="noreferrer"
            >
              <EnvelopeFill />
            </a>
            <a
              href={props.linkedinLink}
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
