import React from 'react'

const adminPanel = () => {
    const handleChange=(e)=>{
        console.log(e.currentTarget.value);
    }
    const handleSubmit=(e)=>{
        console.log("Submitted");
    }
  return (
    <div className="admin-pg-cont">
        <div className='admin-pg-cont-hding'>Admin</div>
        <input onClick={handleChange} type="text" placeholder='Username' required/>
        <input onClick={handleChange} type="password" placeholder='Password' required/>
        <input onClick={handleSubmit} type="Submit" placeholder='Log In'/>
    </div>
  )
}

export default adminPanel
