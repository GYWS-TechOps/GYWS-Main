import { useState,useEffect } from "react";
import {useLocation} from "react-router-dom"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function EditMembersForm() {
  const navigate = useNavigate();
  const location=useLocation();
  const data=location.state;
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

  const POS = [
    "president",
    "VP",
    "GSec",
    "AssSec",
    "HR",
    "CEO-LiGHT",
    "CTO",
    "treasure",
    "SDO",
    "CFO",
    "FACR",
    "Donor Officer",
    "Public Officer",
    "UG",
    "TechOps",
    "SRC",
    "Spons",
    "Finance",
    "Design",
    "Media",
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
    id:"",
    name: "",
    dob: "",
    rollnum: "",
    position: "",
    pos: "",
    img: null,
    otherEmail: "",
    phoneNum: "",
    fbLink: "",
    state: "",
    city: "",
    linkedinLink: "",
    email: "",
    team: "",
    year: "",
  });

  const onChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  async function submitHandler(e){
    e.preventDefault();
    console.log(member);
    await axios.put(`/api/data/${member.id}`,member)
      .then(response => {
        console.log('Data updated successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error updating the data!', error);
      });
      navigate("/secret/membersadmin");
  }
  useEffect(()=>{
    setMember({
    id:data.id,
    name:data.name?data.name:"",
    dob: data.dob?data.dob:"",
    rollnum:data.rollno?data.rollno:"",
    position:data.position?data.position:"",
    pos:data.pos?data.pos:"",
    img:"",
    phoneNum:data.phnum?data.phnum:"",
    fbLink:data.facebookLink?data.facebookLink:"",
    state:data.state?data.state:"",
    city:data.city?data.city:"",
    linkedinLink:data.linkedinLink?data.linkedinLink:"",
    email:data.emails?data.emails:"",
    team:data.team?data.team:"",
    year:data.year?data.year:"",
    })
    console.log(data);
  },[data])
  return (
    <form
      className=" flex flex-col items-center justify-center min-h-[100vh] w-[100vw]"
      onSubmit={submitHandler}
    >
      <h1 className=" text-[22px] font-bold text-gray-900 mt-4 mb-4">
        Edit Members Details
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
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Name
        </label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6 w-[320px]">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="date"
            name="dob"
            onChange={onChange}
            className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
            value={member.dob}
            />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Date Of Birth
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="rollnum"
            onChange={onChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            value={member.rollnum}
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Roll Number
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6 w-[320px]">
        <div className="relative z-0 w-full mb-5 group">
          <select
            onChange={onChange}
            name="state"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={member.state}
          >
            {State.map(function (pos, index) {
              return (
                <option key={index} value={pos}>
                  {pos}
                </option>
              );
            })}
          </select>
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            State
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            onChange={onChange}
            name="city"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={member.city}
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            City
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6 w-[320px]">
        <div className="relative z-0 w-full mb-5 group">
          <select
            onChange={onChange}
            name="position"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={member.position}
            >
            {positionTyp.map(function (pos, index) {
              return (
                <option key={index} value={pos}>
                  {pos}
                </option>
              );
            })}
          </select>
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Position
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <select
            onChange={onChange}
            name="pos"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            value={member.pos}
          >
            {POS.map(function (pos, index) {
              return (
                <option key={index} value={pos}>
                  {pos}
                </option>
              );
            })}
          </select>
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            POS
          </label>
        </div>
      </div>
      <div className="relative z-0  mb-5 group w-[320px]">
        <input
          type="file"
          name="img"
          onChange={onChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          // required
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Upload Image
        </label>
      </div>
      <div className="relative z-0 group w-[320px]">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            onChange={onChange}
            name="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            value={member.email}
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Email
          </label>
        </div>
      </div>
      <div className="relative z-0  mb-5 group w-[320px]">
        <input
          type="text"
            onChange={onChange}
          name="phoneNum"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={member.phoneNum}
        />
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Phone number (123-456-7890)
        </label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6 w-[320px]">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="url"
            onChange={onChange}
            name="fbLink"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            value={member.fbLink}
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Facebook link:
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="url"
            onChange={onChange}
            name="linkedinLink"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            value={member.linkedinLink}
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Linkedin link:
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6 w-[320px]">
        <div className="relative z-0 w-full mb-5 group">
          <select
            onChange={onChange}
            name="team"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            value={member.team}
          >
            {team.map(function (pos, index) {
              return (
                <option key={index} value={pos}>
                  {pos}
                </option>
              );
            })}
          </select>
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Team
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            onChange={onChange}
            name="year"
            min="2020"
            max="2099"
            step="1"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=""
            required
            value={member.year}
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Year
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}

export default EditMembersForm;
