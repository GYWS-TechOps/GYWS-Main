import React from 'react'
import "./adminPanel.css"
const adminPanel = () => {
  const handleChange=(e)=>{
    console.log(e.target.value);
}
const handleSubmit=(e)=>{
    console.log("Submitted");
}
return (
<div className="admin-pg-cont">
    <div className='admin-pg-cont-hding'>Admin</div>
    <input onChange={handleChange} type="text" placeholder='Username' required/>
    <input onChange={handleChange} type="password" placeholder='Password' required/>
    <input id='admin-submit-input-btn' onClick={handleSubmit} type="Submit"/>
</div>
)
}

export default adminPanel
