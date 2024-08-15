

import React, { useState,useEffect} from "react";

function adminForm() {

  const positionTyp=["President","Vice President","General Seceratory","Assistant Secretary","Human Resource Manager","Chief Executive Officer, LiGHT","Chief Technical Officer","Treasurer","School Development Officer","Chief Fundraising Officer","Foreign and Corporate Relation Officer","Donor Engagement Officer","Public Relation Officer","UG Coordinator","SRC Head","TechOps Head","Sponsorship Head","Finance Head","Design Head","Media Head"];


 

  const [member, setMember] = useState({
    name: '',
    position:'',
    img:null,
    fbLink:'',
    linkedinLink:'',
    email:'',
    year:''
})

const onChange=(e)=>{
  
  setMember({...member, [e.target.name]:e.target.value});
  console.log(member)
}


  return (
    
  <div className="flex justify-center items-center min-w-[100vw] min-h-[100vh]  bg-gray-800">
    <form className="flex flex-col justify-center items-center  gap-[8px]">
    <h1 className=" text-[22px] font-bold text-gray-900  dark:text-white mt-4">Admin Details</h1>
  <div className="flex flex-col gap-[4px]">
       <label className="block  text-[18px] font-medium text-gray-900  dark:text-white">Name: </label>
       <div className="flex w-[320px]">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
            </svg>
        </span>
        <input 
          type="text"
          name="name" 
          className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 text-sm p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Enter Your Name"
          onChange={onChange}
          />
      </div>
    </div>  
    <div className="flex flex-col  gap-[4px]">
      <label className="block  text-[18px] font-medium text-gray-900 dark:text-white">Select your Position:</label>
      <select  
        onChange={onChange}
          name="position"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  w-[320px]">
         {positionTyp.map(function(pos, index) {
          return (
            <option key={index} value={pos}>
              {pos}
            </option>
          );
        })} 
     </select>
     </div> 
    <div className="flex flex-col gap-[4px] ">
     <label className="block text-[18px] font-medium text-gray-900 dark:text-white" >Upload Image:</label>
     <input type="file" 
        onChange={onChange}
       name="img"
       className="block  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 w-[320px]" 
     />
     </div>

    <div className="flex flex-col gap-[4px] ">
      <label  className="block  text-[18px] font-medium  text-gray-900 dark:text-white">Facebook link:</label>
      <input
        type="url"
        name="fbLink"
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[320px]"
        placeholder="https://www.facebook.com/"
        required/>

    </div>
    <div className="flex flex-col gap-[4px] ">
      <label  className="block  text-[18px] font-medium  text-gray-900 dark:text-white">Linkedin link:</label>
      <input
        type="url"
        name="linkedinLink"
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[320px]"
        placeholder="https://www.linkedin.com/"
        required/>

    </div>
    <div className="flex flex-col gap-[4px] ">
      <label  className="block  text-[18px] font-medium text-gray-900 dark:text-white">
        Your email:
      </label>
      <input
        type="email"
        name="email"
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[320px]"
        placeholder="name@gyws.org"
      />
     </div> 
    <div className="flex flex-col gap-[4px] ">
        <label className="block text-[18px] font-medium text-gray-900 dark:text-white">Year:</label>
        <input
            type="number"
            name="year"
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[320px]"
            placeholder="YYYY"
            min="2020"
            max="2099"
            step="1"
            required
        />
      </div> 
    <button type="button" className="py-2.5 px-5 me-2 mt-2 mb-4 text-[18px] font-medium text-white duration-300 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:scale-110" onClick={onChange}>Submit</button>
    </form>
  </div>  

    
  )
}

export default adminForm;
