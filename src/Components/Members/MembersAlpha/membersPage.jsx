import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import MembersPageYear from "./membersPageYear"; // Import the component
import Members2324 from "../Members2023-24/Members.jsx";
import Members2223 from "../Members2022-23/Members.jsx";
import Members2122 from "../Members2021-22/Members.jsx";
import Members2021 from "../Members2020-21/Members.jsx";
import Members2020 from "../Members2019-20/Members.jsx";

export default function MemberPage({ year }) {
  const [dynamicYearsList, setDynamicYearsList] = useState([]);

  useEffect(() => {
    // Create a list of years starting from 2024-25 up to the passed year
    let years = [];
    for (let i = 2024; i <= year; i++) {
      years.push(i);
    }
    setDynamicYearsList(years);
  }, [year]);

  return (
    <div>
      <Routes>
        <Route path="/*" element={<MembersPageYear year={year} />} />
        {/* Dynamic routes for years after 2023-24 */}
        {dynamicYearsList.map((y, index) => (
          <Route
            key={index}
            path={`/members${y}-${y - 1999}/*`}
            element={<MembersPageYear year={y} />}
          />
        ))}
        <Route path="/members2023-24/*" element={<Members2324 />} />
        <Route path="/members2022-23/*" element={<Members2223 />} />
        <Route path="/members2021-22/*" element={<Members2122 />} />
        <Route path="/members2020-21/*" element={<Members2021 />} />
        <Route path="/members2019-20/*" element={<Members2020 />} />
      </Routes>
    </div>
  );
}
