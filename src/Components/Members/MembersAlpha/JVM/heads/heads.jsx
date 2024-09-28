import React,{useState, useEffect} from "react";
import "../../GB/GB.css";
import Card from "../../Card/card";
import HCard from "../../../../HeaderCard/HCard";
import { getMemberByPosOrYear } from "../../Request.js";

export default function Heads({ year, team, position, heading }) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function fetchMembers() {
      const fetchedMembers = await getMemberByPosOrYear({
        year: year,
        team: team,
        position: position
      });
      if (Array.isArray(fetchedMembers)) {
        setMembers(fetchedMembers);
      } else {
        setMembers([]); // In case of an error or no members found
      }
    }
    fetchMembers();
  }, [year, position, team]);

  return (
    <>
      <HCard head={`${heading} ${year}-${year - 1999}`}></HCard>
      <div className="members_container">
        {members.length > 0 ? (
          <>
          {
            members.map((member,index)=>(<Card
                key={index}
                name={member.name}
                position={member.teams[0]?.teamAndpos[0]?.position}
                imageUrl={member.imageUrls[0]}
                facebookLink={member.facebookLink}
                email={member.emails[0]}
                linkedinLink={member.linkedinLink}
                data={member}
              />))
          }
          </>
        ) : (
          <p>No members found for the selected year.</p>
        )}
      </div>
    </>
  );
}
