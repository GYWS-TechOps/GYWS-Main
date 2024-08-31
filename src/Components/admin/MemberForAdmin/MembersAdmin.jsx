import React, { useEffect, useState } from 'react'
import "./MembersAdmin.css"
import axios from 'axios';
import MemData from "./MemData/MemData.jsx"
const MembersAdmin = () => {
    const [Membersdata, setMembersdata] = useState([]);
    const getData = () => {
        let data=axios.get('/api/data')
        .then(response => {
            setMembersdata(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the data!', error);
        });
        setMembersdata(data);
    };
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
                    {       //multiple-phonenumber
                        //roll number
                        //City ,State
                        Membersdata.map((props) => {
                            return (<>
                                <div key={props.srNo}>
                                    <MemData id={props.id} onDeleteSuccess={() => handleDeleteSuccess(props.id)} pos={props.pos} name={props.name} Imgurl={props.image} team={props.team} dob={props.dob} rollno={props.rollno} year={props.year} city={props.city} state={props.state} phnum={props.phnum} position={props.position} facebookLink={props.facebook} emails={props.emails} linkedinLink={props.linkedIn} />

                                </div>
                            </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default MembersAdmin
