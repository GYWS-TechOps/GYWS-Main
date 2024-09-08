import React, { useState } from 'react';
import axios from 'axios';
import "./adminPanel.css"
import {jwtDecode} from "jwt-decode";
import { useNavigate } from 'react-router-dom';
const AdminPanel = () => {
    const navigate = useNavigate();
    const [Invalidlogin, setInvalidlogin] = useState(false);

    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit =async (e) => {
        e.preventDefault();

    try {
        const response = await axios.post(process.env.API_URL, {
          Username,
          Password,
        });
  
        // Extract JWT token from the response
        const token = response.data.token;
        if (token) {
            // Store the token in localStorage or cookies
            localStorage.setItem('token', token);
            
            // Decode the token to get admin status and user ID
            const decoded = jwtDecode(token);
            const expiryTime = decoded.exp; // Expiry time in UNIX timestamp
        
            // Calculate when the token will expire
            const currentTime = Math.floor(Date.now() / 1000); // Current time in UNIX timestamp
            const timeRemaining = expiryTime - currentTime;
        
            // Store the expiry time in localStorage or state
            localStorage.setItem('tokenExpiry', expiryTime);
        
            if (timeRemaining > 0) {
              // Set a timeout to automatically handle token expiry
              setTimeout(() => {
                // Handle token expiry
                navigate("/secret/adminpanel")
              }, timeRemaining * 1000); // Convert to milliseconds
            }
          const { isAdmin, id } = decoded;  // Assuming your token contains `isAdmin` and `id`
  
          if (isAdmin) {
            console.log(`Admin ID: ${id}`);
            setInvalidlogin(false);
        navigate("/secret/membersadmin");
          } else {
            setInvalidlogin(true);
          }
        } 
      } catch (err) {
        console.log(err);
      }

    }
    return (<section className='admin-panel-cont-section'>
        <div className='admin-panel-cont2'>
            {/* Gopali Youth Welfare Society */}
            <img className='admin-panel-img' src="/gyws_favicon.ico" alt="" />
        </div>
        <div className="admin-pg-cont">
            <div className='admin-pg-cont-hding'>Admin Login</div>
            {Invalidlogin?<div className='admin-pg--invalid-login'>Invalid username or password.</div>:<></>}
            <div className='admin-pg-input-div'>
                <label>Username:</label>
                <input onChange={handleChangeUsername} type="text" placeholder='Enter the Username' required />
            </div>
            <div className='admin-pg-input-div'>
                <label>Password:</label>
                <input onChange={handleChangePassword} type="password" placeholder='Enter the Password' required />
            </div>
            <input id='admin-submit-input-btn' onClick={handleSubmit} type="Submit" value={"Log In"} />
        </div>
    </section>

    )
}

export default AdminPanel
