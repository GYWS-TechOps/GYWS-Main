import React from 'react'
import "./adminPanel.css"
const adminPanel = () => {
  const handleChange=(e)=>{
    console.log(e.target.value);
}
const handleSubmit=(e)=>{
    console.log("Submitted");
}
return (<section className='admin-panel-cont-section'>
<div className='admin-panel-cont2'>
    {/* Gopali Youth Welfare Society */}
    <img className='admin-panel-img' src="/gyws_favicon.ico" alt="" />
</div>
    <div className="admin-pg-cont">
    <div className='admin-pg-cont-hding'>Admin Login</div>
    <div className='admin-pg-input-div'>
    <label>Username:</label>
    <input onChange={handleChange} type="text" placeholder='Enter the Username' required/>
    </div>
    <div className='admin-pg-input-div'>
    <label>Password:</label>
    <input onChange={handleChange} type="password" placeholder='Enter the Password' required/>
    </div>
    <input id='admin-submit-input-btn' onClick={handleSubmit} type="Submit" value={"Log In"}/>
</div>
</section>

)
}

export default adminPanel
