import React from 'react'
import "./MemData.css"
const MemData = (props) => {
    const handlephnum = () => {
        if (props.phnum !== undefined) {
            return props.phnum.map((p, index) => (
                <div className='admin-mem-pg-data-box admin-mem-pg-data-box-phnum' key={index}>
                    {props.phnum[index]}
                </div>
            ))
        }
    }
    return (
        <div className='admin-mem-pg-row'>
            <button className='admin-mem-pg-edit-btn'>Edit</button>
            <button className='admin-mem-pg-edit-btn'>Delete</button>
            <div className='admin-mem-pg-data-box'>{props.name}</div>
            <div className='admin-mem-pg-data-box'><a href={props.Imgurl}>Image Link</a></div>
            <div className='admin-mem-pg-data-box'>{props.position}</div>
            <div className='admin-mem-pg-data-box'>{props.email}</div>
            <div className='admin-mem-pg-data-box'>{props.rollno}</div>
            <div className='admin-mem-pg-data-box'>{props.city}</div>
            <div className='admin-mem-pg-data-box'>{props.state}</div>
            <div className='admin-mem-pg-data-box'>{props.year}</div>
            <div className='admin-mem-pg-data-box'><a href={props.facebookLink}>{props.facebookLink}</a></div>
            <div className='admin-mem-pg-data-box'><a href={props.linkedinLink}>{props.linkedinLink}</a></div>
            {handlephnum()}
        </div>
    )
}

export default MemData