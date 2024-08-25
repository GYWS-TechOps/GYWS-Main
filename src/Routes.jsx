import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Media from "./Pages/Media/Media.jsx";
import Member from "./Components/Members/Members2024-25/Members.jsx";
import Members2324 from "./Components/Members/Members2023-24/Members.jsx";
import Members2223 from "./Components/Members/Members2022-23/Members.jsx";
import Members2122 from "./Components/Members/Members2021-22/Members.jsx";
import Members2021 from "./Components/Members/Members2020-21/Members.jsx";
import Members2020 from "./Components/Members/Members2019-20/Members.jsx";
import About from "./Pages/AboutUs/About.jsx";
import JVM from "./Components/Initiatives/JVM_PAGE/JVM.jsx";
import LightDonate from "./Components/Donation/lightdonate/LightDonate.jsx";
import Each from "./Components/Donation/Each_JVMCare.jsx";
import HostelCons from "./Components/Donation/Hostel_Contruction.jsx";
import HostelSus from "./Components/Donation/Hostel_Sustainability.jsx";
import Donate from "./Pages/Donate/Donate.jsx";
import Mailer from "./Components/Mailer-Tool/Mailer.jsx";
import AdminPanel from "./Components/admin/adminPanel.jsx";
import MembersForm from "./Components/admin/MembersForm.jsx";
import MembersAdmin from "./Components/admin/MemberForAdmin/MembersAdmin.jsx";

export default function NavRoutes() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/member/*" element={<Member />} />
        <Route path="/member/members2023-24/*" element={<Members2324 />} />
        <Route path="/member/members2022-23/*" element={<Members2223 />} />
        <Route path="/member/members2021-22/*" element={<Members2122 />} />
        <Route path="/member/members2020-21/*" element={<Members2021 />} />
        <Route path="/member/members2019-20/*" element={<Members2020 />} />
        <Route path="/jvm" element={<JVM />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/each" element={<Each />} />
        <Route path="/donate/hostel_construction" element={<HostelCons />} />
        <Route path="/donate/hostel_sustainability" element={<HostelSus />} />
        <Route path="/donate/LiGHT" element={<LightDonate />} />
        <Route path="/Yoadmin/Mailer" element={<Mailer />} />
        <Route
          path="*"
          element={<h1 style={{ height: "100vh" }}>404: Page Not Found</h1>}
        />
        <Route path="/secret/adminpanel" element={<AdminPanel />} />
        <Route path="/secret/membersadmin" element={<MembersAdmin />} />
        <Route path="/secret/membersform" element={<MembersForm />} />
      </Routes>
    </>
  );
}
