import React, { useEffect, useState } from 'react'
import "./MembersAdmin.css"
import axios from 'axios';
import MemData from "./MemData/MemData.jsx"
import { useNavigate } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const BASE_URL = "https://gyws-backend.onrender.com";
const MembersAdmin = () => {
    const navigate = useNavigate();
    const [isLoading, setisLoading] = useState(true);
    const [yearfiltercheck, setyearfiltercheck] = useState(false)
    const [posfiltercheck, setposfiltercheck] = useState(false)
    const [teamfiltercheck, setteamfiltercheck] = useState(false)
    const [teamfilter, setteamfilter] = useState("")
    const [yearfilter, setyearfilter] = useState("")
    const [posfilter, setposfilter] = useState("")
    const [searchQuery, setsearchQuery] = useState("");
    const [delId, setdelId] = useState("");
    const [delconfirmationbox, setdelconfirmationbox] = useState(false);
    const yearoption = ["Year", "2020", "2021", "2022", "2023", "2024"];
    const teamoption = ["Team", "Rise", "Light", "Techops", "Media", "Src", "Finance", "gbs"];
    const posoption = ["Position", "Heads", "Gbs", "VP", "P", "CFO", "CTO",];
    const [teamoptionvalue, setteamoptionvalue] = useState(teamoption[0]);
    const [yearoptionvalue, setyearoptionvalue] = useState(yearoption[0])
    const [posoptionvalue, setposoptionvalue] = useState(posoption[0])
    const checkSessionExpiry = async () => {
        const token = localStorage.getItem('token');
        const expiryTime = localStorage.getItem('sessionExpiry');

        if (token && expiryTime) {
            const currentTime = new Date().getTime();

            if (currentTime > expiryTime) {
                // Session has expired, clear the token and redirect to login
                localStorage.removeItem('token');
                localStorage.removeItem('sessionExpiry');
                navigate("/secret/adminpanel");
            } else {
                // Continue with the user's session
            }
        } else {
            // No token or expiry set, redirect to login
            navigate("/secret/adminpanel");
        }
    };
    checkSessionExpiry();
    const [Membersdata, setMembersdata] = useState();
    const getData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/admins/members`);
            setMembersdata(response.data.members);
            setisLoading(false);
        } catch (error) {
            console.error('There was an error fetching the data!', error);
        }
    }
    useEffect(() => {
        getData();
    }, [])
    const handleSearch = async (e) => {
        e.preventDefault();
        setteamfiltercheck(false);
        setteamoptionvalue(e.value);
        setyearoptionvalue(e.value);
        setyearfiltercheck(false);
        setposoptionvalue(e.value);
        setposfiltercheck(false);
        if (searchQuery !== "" && searchQuery !== " ") {

            setisLoading(true);
            try {
                const response = await axios.get(`${BASE_URL}/admins/memberSearch/${searchQuery}`);
                setMembersdata(response.data);
                setisLoading(false);
            } catch (err) {
                console.error("There was error in seaarching");
                setisLoading(false);
                getData();
            }
        }
    }
    const handleDeleteSuccess = async () => {
        setdelconfirmationbox(false);
        setMembersdata("");
        setisLoading(true);
        await axios.delete(`${BASE_URL}/admins/member/${delId}`)
            .catch(error => {
                console.error('There was an error deleting the data!', error);
            });
        getData();
    };
    const handleMembers = (e) => {
        navigate("/secret/membersform");
    }
    const handleSearchInput = async (e) => {
        setsearchQuery(e.target.value);
    }
    const handledelconfbox = () => {
        setdelconfirmationbox(false);
    }
    const handlefiltersearch = async () => {
        const query = new URLSearchParams();
        if (yearfilter !== "Year" && yearfiltercheck === true) {
            query.append('year', yearfilter);
        }
        if (posfilter !== "Position" && posfiltercheck === true) {
            query.append('position', posfilter);
        }
        if (teamfilter !== "Team" && teamfiltercheck === true) {
            query.append('team', teamfilter);
        }
        try {
            // const response = await axios.get(`${BASE_URL}/admins/memberspy?${query.toString()}`);
            // console.log(response.data.members); 
            // setMembersdata(reponse.data);

        } catch (error) {
            console.error("Error fetching members:", error);
        }
    }
    const handleteamfilter = (e) => {
        // const response=await axios.get(`${BASE_URL}/admins/memberspy?${query}`);
        setteamoptionvalue(e.value);
        if (e.value === "Team") {
            setteamfiltercheck(false);
            handlefiltersearch();
        } else {
            setteamfiltercheck(true)
            setteamfilter(e.value);
            handlefiltersearch();
        };
    }
    const handlepositionfilter = (e) => {
        setposoptionvalue(e.value);
        if (e.value === "Position") {
            setposfiltercheck(false);
            handlefiltersearch();
        } else {
            setposfiltercheck(true);
            setposfilter(e.value);
            handlefiltersearch();
        }

    }
    const handleyearfilter = (e) => {
        setyearoptionvalue(e.value);
        if (e.value === "Year") {
            setyearfiltercheck(false);
            handlefiltersearch();
        } else {
            setyearfiltercheck(true);
            setyearfilter(e.value);
            handlefiltersearch();
        }
    }
    return (
        <>
            <section>
                <h1 className='admin-mem-hding'>Admin Panel</h1>
                <div className="admin-mem-cont1">
                    <button onClick={handleMembers} id='add-mem-admin-btn'>+ Add Members</button>
                    <div className='admin-mem-cont1-subcont1'>
                        <input required onChange={handleSearchInput} type="text" placeholder='Search Members Name' />
                        <button className='mem-adm-srch-btn' onClick={handleSearch}>Search</button>
                        <Dropdown options={yearoption} onChange={handleyearfilter} value={yearoptionvalue} placeholder="Year" />
                        <Dropdown options={teamoption} onChange={handleteamfilter} value={teamoptionvalue} placeholder="Team" />
                        <Dropdown options={posoption} onChange={handlepositionfilter} value={posoptionvalue} placeholder="Pos" />
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
                        {isLoading ? <div className='membersadmin-isLoading-getdata'><InfinitySpin visible={true} width="200" color="#fb6e11" ariaLabel="infinity-spin-loading" /></div> : <></>}
                    </div>
                    {delconfirmationbox ? <>
                        <div className="memadmin-del-confirmation-btn">
                            <div>
                                <h1>Are you sure to delete?</h1>
                            </div>
                            <div className='memadmin-del-conf'>
                                <button className='memadmin-conf-del-btn' onClick={handledelconfbox}>Back</button>
                                <button className='memadmin-conf-del-btn' onClick={handleDeleteSuccess}>Confirm</button>
                            </div>
                        </div>
                    </>
                        : <></>}
                    {
                        Membersdata && Membersdata.map((props, index) => {
                            return (
                                <>
                                    <div key={index}>
                                        <MemData _id={props._id}
                                            onDeleteSuccess={() => {
                                                setdelconfirmationbox(true);
                                                setdelId(props._id);
                                            }}
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
