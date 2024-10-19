import { useState } from "react";
import axios from "axios";
import {
  labelStyle,
  positionTyp,
  State,
  team,
  selectStyle,
  btnStyle,
} from "./constant.jsx";
import toast from "react-hot-toast";

function MembersForm() {
  const [member, setMember] = useState({
    name: "",
    emails: [""],
    imageUrls: [],
    phoneNumbers: [""],
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
        year: "",
      },
    ],
  });

  function emailAddHandler(i) {
    const mails = [...member.emails];
    mails.push("");
    setMember({ ...member, emails: mails });
  }
  function emailRemoveHandler(i) {
    const mails = [...member.emails];
    if (mails.length < 2) {
      toast.error("At least one mail is required.");
      return;
    }
    mails.splice(i, 1);
    setMember({ ...member, emails: mails });
  }

  function emailHandler(i, e) {
    const { value } = e.target;
    const mails = [...member.emails];
    mails[i] = value;
    setMember({ ...member, emails: mails });
  }

  function phoneAddHandler(i) {
    const num = [...member.phoneNumbers];
    num.push("");
    console.log(num);
    setMember({ ...member, phoneNumbers: num });
  }
  function phoneRemoveHandler(i) {
    const num = [...member.phoneNumbers];
    if (num.length < 2) {
      toast.error("At least one phone number is required.");
      return;
    }
    num.splice(i, 1);
    console.log(i, num);
    setMember({ ...member, phoneNumbers: num });
  }

  function phoneNumHandler(i, e) {
    const { value } = e.target;
    const num = [...member.phoneNumbers];
    num[i] = value;
    setMember({ ...member, phoneNumbers: num });
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

  const submitHandler = async (e) => {
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
    const loadingToast = toast.loading("Submitting form...");
    try {
      const response = await axios.post(
        "https://gyws-backend.onrender.com/admins/addMember",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          
        }
      );

      if (response.data) {
        toast.success('Form is Submitted',{id:loadingToast})
        setTimeout(()=>window.location.reload(),2000)
        
      }
    } catch (err) {
      toast.error('Error in Submitting form',{ id: loadingToast })
    
      setTimeout(()=>window.location.reload(),2000)
    }
  };

  return (
    <form
      className={
        "flex flex-col items-center justify-center min-h-[100vh] w-[100vw] "
      }
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
          className={selectStyle}
          placeholder=""
          required
        />
        <label className={labelStyle}>Name</label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6 w-[320px]">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="date"
            name="dateOfBirth"
            onChange={onChange}
            className={selectStyle}
          />
          <label className={labelStyle}>Date Of Birth</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="rollNo"
            onChange={onChange}
            className={selectStyle}
            placeholder=" "
          />
          <label className={labelStyle}>Roll Number</label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6 w-[320px]">
        <div className="relative z-0 w-full mb-5 group">
          <select
            onChange={onChange}
            name="state"
            className={selectStyle}
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
          <label className={labelStyle}>State</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="city"
            onChange={onChange}
            className={selectStyle}
            placeholder=" "
          />
          <label className={labelStyle}>City</label>
        </div>
      </div>

      <div className="relative z-0  mb-5 group w-[320px]">
        <select
          onChange={onChange}
          name="teams[0].teamAndpos[0].position"
          className={selectStyle}
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
        <label className={labelStyle}>Position</label>
      </div>

      <div className="relative z-0  mb-5 group w-[320px]">
        <input
          id="imageUpload"
          type="file"
          name="imageUrls"
          className={selectStyle}
          placeholder=" "
          required
          multiple
        />
        <label className={labelStyle}>Upload Image</label>
      </div>

      {member.emails.map((email, index) => {
        return (
          <div
            key={index}
            className="relative z-0  mb-3 group w-[320px] flex flex-col items-center gap-[5px]"
          >
            <input
              type="email"
              name="emails"
              onChange={(e) => emailHandler(index, e)}
              className={`${selectStyle}`}
              placeholder=" "
              required
            />
            <label className={labelStyle}>Email</label>
            <div className="flex  items-center">
              <button
                type="button"
                className={btnStyle}
                onClick={() => emailAddHandler(index)}
              >
                Add
              </button>
              <button
                type="button"
                className={` ${btnStyle} bg-red-500  hover:bg-red-600`}
                onClick={() => emailRemoveHandler(index)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      {member.phoneNumbers.map((num, index) => {
        return (
          <div
            key={index}
            className="relative z-0  mb-3 group w-[320px] flex flex-col items-center gap-[5px]"
          >
            <input
              type="tel"
              name="phoneNumbers"
              pattern="\d{10}"
              onChange={(e) => phoneNumHandler(index, e)}
              className={selectStyle}
              placeholder=" "
            />
            <label className={labelStyle}>Phone number (123-456-7890)</label>
            <div className="flex  items-center">
              <button
                type="button"
                className={btnStyle}
                onClick={() => phoneAddHandler(index)}
              >
                Add
              </button>
              <button
                type="button"
                className={` ${btnStyle} bg-red-500  hover:bg-red-600`}
                onClick={() => phoneRemoveHandler(index)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}

      <div className="grid md:grid-cols-2 md:gap-6 w-[320px]">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="url"
            name="facebookLink"
            onChange={onChange}
            className={selectStyle}
            placeholder=" "
            required
          />
          <label className={labelStyle}>Facebook link:</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="url"
            name="linkedinLink"
            onChange={onChange}
            className={selectStyle}
            placeholder=" "
            required
          />
          <label className={labelStyle}>Linkedin link:</label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6 w-[320px]">
        <div className="relative z-0 w-full mb-5 group">
          <select
            onChange={onChange}
            name="teams[0].teamAndpos[0].team"
            required
            className={selectStyle}
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
          <label className={labelStyle}>Team</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="teams[0].year"
            min="2020"
            max="2099"
            onChange={onChange}
            step="1"
            className={selectStyle}
            placeholder=" "
            required
          />
          <label className={labelStyle}>Year</label>
        </div>
      </div>
      <button type="submit" className={btnStyle}>
        Submit
      </button>
    </form>
  );
}

export default MembersForm;
