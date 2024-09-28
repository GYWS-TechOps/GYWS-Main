import React, { useState, useEffect } from "react";
import "./GB.css";
import Card from "../Card/card";
import HCard from "../../../HeaderCard/HCard.jsx";
import { getMemberByPosOrYear } from "../Request.js";

export default function GB({ year }) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function fetchMembers() {
      const fetchedMembers = await getMemberByPosOrYear({ year, team: 'gbs' });
      if (Array.isArray(fetchedMembers)) {
        setMembers(fetchedMembers);
      } else {
        setMembers([]); // In case of an error or no members found
      }
    }
    fetchMembers();
  }, [year]);

  // List of important positions to display first
  const importantPositions = [
    "President",
    "Vice President",
    "General Secretary",
    "Assistant Secretary",
    "Human Resource Manager"
  ];

  // Filter members based on important positions
  const importantMembers = members.filter(member =>
    importantPositions.includes(member.teams[0]?.teamAndpos[0]?.position)
  );

  // Sort important members based on the order in importantPositions
  importantMembers.sort((a, b) => {
    return importantPositions.indexOf(a.teams[0]?.teamAndpos[0]?.position) -
           importantPositions.indexOf(b.teams[0]?.teamAndpos[0]?.position);
  });

  // Filter out members who have already been rendered
  const otherMembers = members.filter(
    member => !importantPositions.includes(member.teams[0]?.teamAndpos[0]?.position)
  );

  return (
    <>
      <HCard head={`Governing Body Members ${year}-${year - 1999}`} />
      <div className="members_container">
        {members.length > 0 ? (
          <>
            {importantMembers.map((member, index) => (
              <Card
                key={`important-${index}`}
                name={member.name}
                position={member.teams[0]?.teamAndpos[0]?.position}
                imageUrl={member.imageUrls[0]}
                facebookLink={member.facebookLink}
                email={member.emails[0]}
                linkedinLink={member.linkedinLink}
                data={member}
              />
            ))}

            {otherMembers.map((member, index) => (
              <Card
                key={`other-${index}`}
                name={member.name}
                position={member.teams[0]?.teamAndpos[0]?.position}
                imageUrl={member.imageUrls[0]}
                facebookLink={member.facebookLink}
                email={member.emails[0]}
                linkedinLink={member.linkedinLink}
                data={member}
              />
            ))}
          </>
        ) : (
          <p>No members found for the selected year.</p>
        )}
      </div>
    </>
  );
}
