import React, { useEffect, useState } from 'react'
import "./MembersAdmin.css"
import axios from 'axios';
import MemData from "./MemData/MemData.jsx"
import { useNavigate } from 'react-router-dom';

const BASE_URL = "https://gyws-backend.onrender.com"

const MembersAdmin = () => {
    //   const navigate = useNavigate();
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
    const [Membersdata, setMembersdata] = useState();
    const getData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/admins/members`);
            setMembersdata(response.data.members); // Directly set the membersdata
            console.log(response.data.members)
            
        } catch (error) {
            console.error('There was an error fetching the data!', error);
        }
    }
    useEffect(() => {
        getData();
    }, [])
    const handleSearch = (e) => {
        console.log("Searching");
    }
    const handleDeleteSuccess = (deletedId) => {
        setMembersdata(prevData => prevData.filter(item => item._id !== deletedId));
    };
    const handleMembers = (e) => {
        console.log("Add members Button");
    }
    const handleSearchInput = (e) => {
        console.log(e.target.value);
    }
    return (
        <>
            <section>
                <h1 className='admin-mem-hding'>Admin Panel</h1>
                <div className="admin-mem-cont1">
                    <button onClick={handleMembers} id='add-mem-admin-btn'>+ Add Members</button>
                    <div className='admin-mem-cont1-subcont1'>
                        <input required onChange={handleSearchInput} type="text" placeholder='Search Members Name' />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                </div>
                <div className="admin-members-show-list">
                    <div>
                        <div className="admin-mem-pg-row admin-mem-pg-row-head">
                            <div className="admin-mem-pg-data-box admin-mem-pg-margin-left">Name</div>
                            <div className="admin-mem-pg-data-box">Image</div>
                            <div className="admin-mem-pg-data-box">Position</div>
                            <div className="admin-mem-pg-data-box">Team</div>
                            <div className="admin-mem-pg-data-box">Roll no.</div>
                            <div className="admin-mem-pg-data-box">Date of Birth</div>
                            <div className="admin-mem-pg-data-box">City</div>
                            <div className="admin-mem-pg-data-box">State</div>
                            <div className="admin-mem-pg-data-box">Year</div>
                            <div className="admin-mem-pg-data-box">Facebook</div>
                            <div className="admin-mem-pg-data-box">LinkedIn</div>
                            <div className="admin-mem-pg-data-box">Phone Numbers</div>
                            <div className="admin-mem-pg-data-box">Emails</div>
                        </div>
                    </div>
                    {
                        Membersdata && Membersdata.map((props, index) => {
                            return (
                                <>
                                    <div key={index}>
                                        <MemData _id={props._id}
                                            onDeleteSuccess={() => handleDeleteSuccess(props._id)}
                                            pos={props.teams[0].teamAndpos[0].pos || ""}
                                            name={props.name || ""} Imgurl={props.imageUrls[0] || ""} 
                                            team={props.teams[0].teamAndpos[0].team || ""}
                                            dob={props.dateOfBirth || ""} rollno={props.rollNo || ""} 
                                            year={props.teams[0].year || ""}
                                            city={props.city || ""} state={props.state} phnum={props.phoneNumbers || ""}
                                            position={props.teams[0].teamAndpos[0].position || ""}
                                            facebookLink={props.facebookLink || ""} emails={props.emails || ""}
                                            linkedinLink={props.linkedinLink || ""}
                                            />
                                    </div>
                                </>
                            )
                        })}
                </div>
            </section>
        </>
    )
}

export default MembersAdmin
