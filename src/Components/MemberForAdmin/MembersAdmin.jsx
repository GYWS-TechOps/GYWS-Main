import React, { useEffect,useState } from 'react'
import { getMembersData } from '../MembersData/membersData'
import "./MembersAdmin.css"
import MemData from "./MemData/MemData.jsx"
const MembersAdmin = () => {
    const [Membersdata, setMembersdata] = useState([]);
    const getData=async()=>{
        let data;
        try {
            data=await getMembersData();
            console.log(data);
            setMembersdata(data);
        } catch (error) {
            throw error;
        }
    }
    useEffect(()=>{
        getData();
    },[])
    const handleSearch=(e)=>{
        console.log("Searching");
    }
    const handleMembers=(e)=>{
        console.log("Add members Button");
    }
    const handleSearchInput=(e)=>{
        console.log(e.target.value);
    }
  return (
    <>
    <section>
        <h1 className='admin-mem-hding'>Admin Panel</h1>
        <div className="admin-mem-cont1">
            <button onClick={handleMembers} id='add-mem-admin-btn'>+ Add Members</button>
            <div className='admin-mem-cont1-subcont1'>
            <input onChange={handleSearchInput} type="text" placeholder='Search Members Name'/>
            <button onClick={handleSearch}>Search</button>
            </div>
        </div>
        <div className="admin-members-show-list">
            {       //multiple-phonenumber
            //roll number
            //City ,State
                    Membersdata.map((props)=>{
                        return (<>
                        <div key={props.srNo}>
                            <MemData name={props.name} Imgurl={props.image} rollno={props.rollno} year={props.year} city={props.city} state={props.state} phnum={props.phnum} position={props.position} facebookLink={props.facebook} email={props.email} linkedinLink={props.linkedIn}/>
                            
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
