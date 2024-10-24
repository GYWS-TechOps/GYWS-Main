import React,{useEffect, useState} from 'react'
import "./MemData.css"
import { useNavigate } from 'react-router-dom';
import {
    Facebook,
    Linkedin,
  } from 'react-bootstrap-icons';
const MemData = (props) => {
    const [propdob, setpropdob] = useState("");
    const navigate = useNavigate();
    const handlepropdata=()=>{
        let yr,mnth,date;
        if(props.dob!==undefined && props.dob!==""){
            yr=props.dob.slice(0,4);
            mnth=props.dob.slice(5,7);
            date=props.dob.slice(8,10);
            setpropdob(`${yr}-${mnth}-${date}`);
        }
    }
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
        navigate("/secret/editmembersform",{state:{rest,propdob}});
    }
    const handleDelete=async (e)=>{
            props.onDeleteSuccess(props._id);
    }
    useEffect(()=>{
        handlepropdata();
    });
    return (<>
        <div className='admin-mem-pg-row'>
            <button className='admin-mem-pg-edit-btn'onClick={handleEdit}>Edit</button>
            <button className='admin-mem-pg-edit-btn' onClick={handleDelete}>Delete</button>
            <div className='admin-mem-pg-data-box'>{props.name}</div>
            <div className='admin-mem-pg-data-box admin-mem-pg-data-box-image'><img src={props.Imgurl} alt=""/></div>
            <div className='admin-mem-pg-data-box'>{props.position}</div>
            <div className='admin-mem-pg-data-box'>{props.team}</div>
            <div className='admin-mem-pg-data-box'>{props.rollno}</div>
            <div className='admin-mem-pg-data-box'>{propdob}</div>
            <div className='admin-mem-pg-data-box'>{props.city}</div>
            <div className='admin-mem-pg-data-box'>{props.state}</div>
            <div className='admin-mem-pg-data-box'>{props.year}</div>
            <div className='admin-mem-pg-data-box admin-mem-pg-data-box-social'><a href={props.facebookLink}><Facebook /></a></div>
            <div className='admin-mem-pg-data-box admin-mem-pg-data-box-social'><a href={props.linkedinLink}><Linkedin /></a></div>
            <div className='admin-mem-pg-data-box-multi'>{handlephnum()}</div>
            <div className='admin-mem-pg-data-box-multi'>{handleEmails()}</div>
        </div>
    </>
    )
}
export default MemData