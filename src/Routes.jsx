import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Media from "./Pages/Media/Media.jsx";
import About from "./Pages/AboutUs/About.jsx";
import JVM from "./Components/Initiatives/JVM_PAGE/JVM.jsx";
import LightDonate from "./Components/Donation/lightdonate/LightDonate.jsx";
import Each from "./Components/Donation/Each_JVMCare.jsx";
import HostelCons from "./Components/Donation/Hostel_Contruction.jsx";
import HostelSus from "./Components/Donation/Hostel_Sustainability.jsx";
import Donate from "./Pages/Donate/Donate.jsx";
import Mailer from "./Components/Mailer-Tool/Mailer.jsx";
// import AdminPanel from "./Components/admin/adminPanel.jsx";
// import MembersForm from "./Components/admin/MembersForm.jsx";
// import EditMembersForm from "./Components/admin/EditMembersForm.jsx";
// import MembersAdmin from "./Components/admin/MemberForAdmin/MembersAdmin.jsx";
import MemberPage from "./Components/Members/MembersAlpha/membersPage.jsx"; // Import MemberPage

export default function NavRoutes() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/jvm" element={<JVM />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/each" element={<Each />} />
        <Route path="/donate/hostel_construction" element={<HostelCons />} />
        <Route path="/donate/hostel_sustainability" element={<HostelSus />} />
        <Route path="/donate/LiGHT" element={<LightDonate />} />
        <Route path="/Yoadmin/Mailer" element={<Mailer />} />
        <Route path="*" element={<h1 style={{ height: "100vh" }}>404: Page Not Found</h1>} />
        {/* <Route path="/secret/adminpanel" element={<AdminPanel />} />
        <Route path="/secret/membersadmin" element={<MembersAdmin />} />
        <Route path="/secret/membersform" element={<MembersForm />} />
        <Route path="/secret/editmembersform" element={<EditMembersForm />} /> */}
        <Route path="/member/*" element={<MemberPage year={2024} />} />
      </Routes>
    </>
  );
}
