import React, { useEffect,useState } from 'react'
import { getMembersData } from '../MembersData/membersData'
import "./MembersAdmin.css"
import Card from "./Card/card.jsx"
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
  return (
    <>
    <section>
        <h1 className='admin-mem-hding'>Admin Panel</h1>
        <div className="admin-mem-cont1">
            <button id='add-mem-admin-btn'>+ Add Members</button>
            <div className='admin-mem-cont1-subcont1'>
            <input type="text" placeholder='Search Members Name'/>
            <button>Search</button>
            </div>
        </div>
        <div className="admin-members-show-list">
            {       
                    Membersdata.map((props)=>{
                        return (<>
                        <div key={props.srNo}>
                            <Card key={props.srNo} name={props.name} position={props.position} facebookLink={props.facebook} email={props.email} linkedinLink={props.linkedIn}/>
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
