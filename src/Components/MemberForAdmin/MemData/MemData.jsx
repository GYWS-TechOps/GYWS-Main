import React from 'react'
import "./MemData.css"
const MemData = (props) => {
    const handlephnum=()=>{
        if(props.phnum!==undefined){
            return props.phnum.map((p,index)=>(
            <div className='admin-mem-pg-data-box' key={index}>
                PhoneNo.{index+1}: {props.phnum[index]}
            </div>
            ))
    }
    }
  return (
    <div className='admin-mem-pg-row'>
    <button className='admin-mem-pg-edit-btn'>Edit</button>
    <button className='admin-mem-pg-edit-btn'>Delete</button>
      <div className='admin-mem-pg-data-box'>Name: {props.name}</div>
      <div className='admin-mem-pg-data-box'>Image: {props.Imgurl}</div>
      <div className='admin-mem-pg-data-box'>Position: {props.position}</div>
      <div className='admin-mem-pg-data-box'>Email: {props.email}</div>
      <div className='admin-mem-pg-data-box'>Roll No.:{props.rollno}</div>
      <div className='admin-mem-pg-data-box'>City: {props.city}</div>
      <div className='admin-mem-pg-data-box'>State: {props.state}</div>
      {handlephnum()}
      <div className='admin-mem-pg-data-box'>Year: {props.year}</div>
      <div className='admin-mem-pg-data-box'>Facebook: {props.facebookLink}</div>
      <div className='admin-mem-pg-data-box'>LinkedIn: {props.linkedinLink}</div>
    </div>
  )
}

export default MemData
