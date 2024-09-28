import React from 'react'
import "./MemData.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = "https://gyws-backend.onrender.com";
const MemData = (props) => {
    const navigate = useNavigate();
    const handlephnum = () => {
        if (props.phnum !== undefined) {
            return props.phnum.map((p, index) => (
                <div className='admin-mem-pg-data-box-phnum' key={index}>
                    {props.phnum[index]}
                </div>
            ))
        }
    }
    const handleEmails = () => {
        if (props.emails !== undefined) {
            return props.emails.map((p, index) => (
                <div className='admin-mem-pg-data-box-phnum' key={index}>
                    {props.emails[index]}
                </div>
            ))
        }
    }
    const handleEdit=(e)=>{
        const {onDeleteSuccess, ...rest}=props;
        console.log(rest);
        navigate("/secret/editmembersform",{state:rest});
    }
    const handleDelete=async (e)=>{
        await axios.delete(`${BASE_URL}/member/${props._id}`)
        .then(response => {
            console.log('Data deleted successfully:', response.data);

    })
    .catch(error => {
      console.error('There was an error deleting the data!', error);
    });
    }
    return (
        <div className='admin-mem-pg-row'>
            <button className='admin-mem-pg-edit-btn'onClick={handleEdit}>Edit</button>
            <button className='admin-mem-pg-edit-btn' onClick={handleDelete}>Delete</button>
            <div className='admin-mem-pg-data-box'>{props.name}</div>
            <div className='admin-mem-pg-data-box'><a href={props.Imgurl}>Image Link</a></div>
            <div className='admin-mem-pg-data-box'>{props.position}</div>
            <div className='admin-mem-pg-data-box'>{props.team}</div>
            <div className='admin-mem-pg-data-box'>{props.rollno}</div>
            <div className='admin-mem-pg-data-box'>{props.dob}</div>
            <div className='admin-mem-pg-data-box'>{props.city}</div>
            <div className='admin-mem-pg-data-box'>{props.state}</div>
            <div className='admin-mem-pg-data-box'>{props.year}</div>
            <div className='admin-mem-pg-data-box admin-mem-pg-data-box-social'><a href={props.facebookLink}>{props.facebookLink}</a></div>
            <div className='admin-mem-pg-data-box admin-mem-pg-data-box-social'><a href={props.linkedinLink}>{props.linkedinLink}</a></div>
            <div className='admin-mem-pg-data-box-multi'>{handlephnum()}</div>
            <div className='admin-mem-pg-data-box-multi'>{handleEmails()}</div>
        </div>
    )
}

export default MemData
