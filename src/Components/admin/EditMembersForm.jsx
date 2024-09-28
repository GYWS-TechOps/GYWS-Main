import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BASE_URL = "https://gyws-backend.onrender.com"

function MembersForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  //   const checkSessionExpiry = () => {
  //     const token = localStorage.getItem('token');
  //     const expiryTime = localStorage.getItem('sessionExpiry');

  //     if (token && expiryTime) {
  //       const currentTime = new Date().getTime();

  //       if (currentTime > expiryTime) {
  //         // Session has expired, clear the token and redirect to login
  //         localStorage.removeItem('token');
  //         localStorage.removeItem('sessionExpiry');
  //         navigate("/secret/adminpanel");
  //       } else {
  //         // Continue with the user's session
  //       }
  //     } else {
  //       // No token or expiry set, redirect to login
  //     navigate("/secret/adminpanel");
  //     }
  //   };
  // checkSessionExpiry();
  const positionTyp = [
    "President",
    "Vice President",
    "General Seceratory",
    "Assistant Secretary",
    "Human Resource Manager",
    "Chief Executive Officer, LiGHT",
    "Chief Technical Officer",
    "Treasurer",
    "School Development Officer",
    "Chief Fundraising Officer",
    "Foreign and Corporate Relation Officer",
    "Donor Engagement Officer",
    "Public Relation Officer",
    "UG Coordinator",
    "SRC Head",
    "TechOps Head",
    "Sponsorship Head",
    "Finance Head",
    "Design Head",
    "Media Head",
  ];
  const State = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const team = [
    "UG Coordinator",
    "SRC",
    "Techops",
    "Sponsorship",
    "Finance",
    "RISE",
    "LiGHT",
    "Design",
    "Media & Publicity",
  ];

  const [member, setMember] = useState({
    id: "",
    name: "",
    emails: [''],
    imageUrls: [''],
    phoneNumbers: [''],
    facebookLink: "",
    linkedinLink: "",
    state: "",
    city: "",
    dateOfBirth: "",
    rollNo: "",
    teams: [
      {
        teamAndpos: [
          {
            team: "",
            pos: "",
            position: "",
          },
        ],
        year: ""
      }
    ],
  });

  function emailClickHandler(i) {
    const mails = [...member.emails];
    mails.push("");
    setMember({ ...member, emails: mails });
  }

  function emailHandler(i, e) {
    const { value } = e.target
    const mails = [...member.emails]
    mails[i] = value
    setMember({ ...member, emails: mails })
  }
  function phoneClickHandler(i) {
    const num = [...member.phoneNumbers];
    num.push("");
    setMember({ ...member, phoneNumbers: num });
  }

  function phoneNumHandler(i, e) {
    const { value } = e.target
    const num = [...member.phoneNumbers]
    num[i] = value
    setMember({ ...member, phoneNumbers: num })
  }
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name !== "imageUrls") {
      if (name === "dateOfBirth") {
        const inputDate = new Date(value);
        const formattedDate = `${inputDate.getFullYear()}/${(
          inputDate.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}/${inputDate
          .getDate()
          .toString()
          .padStart(2, "0")}`;
        setMember({ ...member, dateOfBirth: formattedDate });
      } else if (name === "teams[0].year") {
        const updatedTeams = [...member.teams];
        updatedTeams[0].year = Number(value);
        setMember({ ...member, teams: updatedTeams });
      } else if (name === "teams[0].teamAndpos[0].team") {
        const updatedTeams = [...member.teams];
        if (value === "UG Coordinator")
          updatedTeams[0].teamAndpos[0].team = "coordinators";
        if (value === "SRC") updatedTeams[0].teamAndpos[0].team = "src";
        if (value === "Techops") updatedTeams[0].teamAndpos[0].team = "techops";
        if (value === "Sponsorship")
          updatedTeams[0].teamAndpos[0].team = "sponse";
        if (value === "Finance") updatedTeams[0].teamAndpos[0].team = "finance";
        if (value === "RISE") updatedTeams[0].teamAndpos[0].team = "rise";
        if (value === "LiGHT") updatedTeams[0].teamAndpos[0].team = "light";
        if (value === "Design") updatedTeams[0].teamAndpos[0].team = "design";
        if (value === "Media & Publicity")
          updatedTeams[0].teamAndpos[0].team = "media";
        if (value === "Governing Body")
          updatedTeams[0].teamAndpos[0].team = "gbs";
        updatedTeams[0].teamAndpos[0].team = value;
      } else if (name === "teams[0].teamAndpos[0].position") {
        const updatedTeams = [...member.teams];
        updatedTeams[0].teamAndpos[0].position = value;
        if (value === "President") updatedTeams[0].teamAndpos[0].pos = "p";
        if (value === "Vice President")
          updatedTeams[0].teamAndpos[0].pos = "vp";
        if (value === "General Seceratory")
          updatedTeams[0].teamAndpos[0].pos = "gsec";
        if (value === "Assistant Secretary")
          updatedTeams[0].teamAndpos[0].pos = "asec";
        if (value === "Human Resource Manager")
          updatedTeams[0].teamAndpos[0].pos = "hr";
        if (value === "Chief Executive Officer, LiGHT")
          updatedTeams[0].teamAndpos[0].pos = "ceo";
        if (value === "Chief Technical Officer")
          updatedTeams[0].teamAndpos[0].pos = "cto";
        if (value === "Treasurer") updatedTeams[0].teamAndpos[0].pos = "treas";
        if (value === "School Development Officer")
          updatedTeams[0].teamAndpos[0].pos = "sdo";
        if (value === "Chief Fundraising Officer")
          updatedTeams[0].teamAndpos[0].pos = "cfo";
        if (value === "Foreign and Corporate Relation Officer")
          updatedTeams[0].teamAndpos[0].pos = "facro";
        if (value === "Donor Engagement Officer")
          updatedTeams[0].teamAndpos[0].pos = "deo";
        if (value === "Public Relation Officer")
          updatedTeams[0].teamAndpos[0].pos = "pro";
        if (value === "UG Coordinator")
          updatedTeams[0].teamAndpos[0].pos = "ug";
        if (value === "SRC Head") updatedTeams[0].teamAndpos[0].pos = "srch";
        if (value === "TechOps Head") updatedTeams[0].teamAndpos[0].pos = "th";
        if (value === "Sponsorship Head")
          updatedTeams[0].teamAndpos[0].pos = "sh";
        if (value === "Finance Head") updatedTeams[0].teamAndpos[0].pos = "fh";
        if (value === "Design Head") updatedTeams[0].teamAndpos[0].pos = "dh";
        if (value === "Media Head") updatedTeams[0].teamAndpos[0].pos = "mh";
        setMember({ ...member, teams: updatedTeams });
      } else {
        setMember({ ...member, [name]: value });
      }
    }
  };
  useEffect(() => {
    setMember({
      id: data._id,
      name: data.name ? data.name : "",
      dateOfBirth: data.dob ? data.dob : "",
      rollNo: data.rollno ? data.rollno : "",
      teams: [{
        teamAndpos: [
          {
            team: data.team ? data.team : "",
            pos: data.pos ? data.pos : "",
            position: data.position ? data.position : "",
          },
        ],
        year: data.year ? data.year : "",
      }
      ],
      imageUrls: [data.ImageUrl],
      phoneNumbers:data.phnum.length?data.phnum:[""],
      facebookLink: data.facebookLink ? data.facebookLink : "",
      state: data.state ? data.state : "",
      city: data.city ? data.city : "",
      linkedinLink: data.linkedinLink ? data.linkedinLink : "",
      emails: data.emails,
      year: data.year ? data.year : "",
    })
  }, [data])

  async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData();

    if (member.imageUrls) {
      const imageFile = document.querySelector("#imageUpload").files[0]; // Get the first image file
      if (imageFile) {
        formData.append("image", imageFile);
      }
    }

    for (let key in member) {
      if (key !== "imageUrls") {
        if (key === "dateOfBirth") {
          const inputDate = new Date(member[key]);
          const formattedDate = `${inputDate.getFullYear()}-${(
            inputDate.getMonth() + 1
          )
            .toString()
            .padStart(2, "0")}-${inputDate
            .getDate()
            .toString()
            .padStart(2, "0")}`;
          formData.append(key, formattedDate); // Append formatted date
        } else if (key === "teams") {
          member[key].forEach((team, index) => {
            formData.append(`teams[${index}][year]`, team.year);
            team.teamAndpos.forEach((teamPos, posIndex) => {
              formData.append(
                `teams[${index}][teamAndpos][${posIndex}][team]`,
                teamPos.team
              );
              formData.append(
                `teams[${index}][teamAndpos][${posIndex}][position]`,
                teamPos.position
              );
              formData.append(
                `teams[${index}][teamAndpos][${posIndex}][pos]`,
                teamPos.pos
              );
            });
          });
        } else {
          formData.append(key, member[key]);
        }
      }
    }

    await axios.put(`${BASE_URL}/admins//addMemberData/:_id` + member.id, member)
      .then(response => {
        console.log('Data updated successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error updating the data!', error);
      });
    navigate("/secret/membersadmin");
  }

  return (
    <form
      className=" flex flex-col items-center justify-center min-h-[100vh] w-[100vw]"
      onSubmit={submitHandler}
    >
      <h1 className=" text-[22px] font-bold text-gray-900 mt-4">
        Members Details
      </h1>
      <div className="relative z-0  mb-5 group w-[320px]">
        <input
          type="text"
          name="name"
          onChange={onChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={member.name}
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-[6px] -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Name
        </label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6 w-[320px]">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="date"
            name="dateOfBirth"
            onChange={onChange}
            value={member.dob}
            className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-[6px] -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Date Of Birth
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="rollNo"
            onChange={onChange}
            value={member.rollNo}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-[6px] -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Roll Number
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6 w-[320px]">
        <div className="relative z-0 w-full mb-5 group">
          <select
            onChange={onChange}
            name="state"
            value={member.state}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          >
            {State.map(function (pos, index) {
              return (
                <option key={index} value={pos}>
                  {pos}
                </option>
              );
            })}
          </select>
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-[6px] -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            State
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="city"
            onChange={onChange}
            value={member.city}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-[6px] -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            City
          </label>
        </div>
      </div>

      <div className="relative z-0  mb-5 group w-[320px]">
        <select
          onChange={onChange}
          value={member.teams[0].teamAndpos[0].position}
          name="teams[0].teamAndpos[0].position"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        >
          {positionTyp.map(function (pos, index) {
            return (
              <option key={index} value={pos}>
                {pos}
              </option>
            );
          })}
        </select>
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-[6px] -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Position
        </label>
      </div>


      <div className="relative z-0  mb-5 group w-[320px]">
        <input
          id="imageUpload"
          type="file"
          name="imageUrls"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-[6px] -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Upload Image
        </label>
      </div>

      {
        member.emails.map((email, index) => {
          return (
            <div key={index} className="relative z-0  mb-5 group w-[320px] flex gap-[4px]">
              <input
                type="email"
                name="emails"
                onChange={(e) => emailHandler(index, e)}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={member.emails}
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-[6px] -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email
              </label>
              <button
                type="button"
                className="text-white transition-all duration-100 bg-[#f26a36] hover:bg-[#d85c31] active:ring-4 active:ring-[#f26a36]/50 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                onClick={() => emailClickHandler(index)}
              >
                Add
              </button>
            </div>
          )
        })}
      {
      member.phoneNumbers.map((num, index) => {
        return (
          <div
            key={index}
            className="relative z-0  mb-5 group w-[320px] flex gap-[4px]"
          >
            <input
              type="tel"
              name="phoneNumbers"
              pattern="\d{10}"
              onChange={(e) => phoneNumHandler(index, e)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={member.phoneNumbers}
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-[6px] -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Phone number (123-456-7890)
            </label>
            <button
              type="button"
              className="text-white transition-all duration-100 bg-[#f26a36] hover:bg-[#d85c31] active:ring-4 active:ring-[#f26a36]/50 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              onClick={() => phoneClickHandler(index)}
            >
              Add
            </button>
          </div>
        );
      })}

      <div className="grid md:grid-cols-2 md:gap-6 w-[320px]">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="url"
            name="facebookLink"
            onChange={onChange}
            value={member.facebookLink}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-[6px] -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Facebook link:
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="url"
            name="linkedinLink"
            onChange={onChange}
            value={member.linkedinLink}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-[6px] -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Linkedin link:
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6 w-[320px]">
        <div className="relative z-0 w-full mb-5 group">
          <select
            onChange={onChange}
            value={member.teams[0].teamAndpos[0].team}
            name="teams[0].teamAndpos[0].team"
            required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          >
            {team.map(function (pos, index) {
              return (
                <option key={index} value={pos}>
                  {pos}
                </option>
              );
            })}
          </select>
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-[6px] -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Team
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="teams[0].year"
            min="2020"
            max="2099"
            onChange={onChange}
            value={member.teams[0].year}
            step="1"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-[6px] -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Year
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="text-white transition-all duration-100 bg-[#f26a36] hover:bg-[#d85c31] active:ring-4 active:ring-[#f26a36]/50 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none "
      >
        Submit
      </button>
    </form>
  );
}

export default MembersForm;
