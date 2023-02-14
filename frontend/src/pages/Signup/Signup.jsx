import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import  "./Signup.css"

const Signup = () => {

const [username, setUsername]=useState(null);
const [email, setEmail]=useState(null);
const [password, setPassword]=useState(null);
const [country, setCountry]=useState(null);
const [city, setCity]=useState(null);
const [contact, setContact]=useState(null);
const navigate=useNavigate();
const handleChange=(e)=>{
    const {id,value}=e.target;
    if(id==="username"){
      setUsername(value);
    }
    if(id==="password"){
      setPassword(value);
    }
    if(id==="email"){
      setEmail(value);
    }
    if(id==="country"){
      setCountry(value);
    }
    if(id==="city"){
      setCity(value);
    }
    if(id==="contact"){
      setContact(value);
    }
}

  const handleClick=async(e)=>{
    e.preventDefault();
    let obj={
      username:username,
      email:email,
      password:password,
      country:country,
      city:city,
      contact:contact
    }

    try{
      const res= await axios.post("/auth/register",obj);
      navigate("/login")
    }
    catch(err){
      return err;
    }


  }

  return (
    <>
    <Navbar />
    <div className='signup'>

        <div className="scontainer">
        <h2> &nbsp; &nbsp; &nbsp; &nbsp;   Let's get you started!</h2>
            <input type="text" placeholder='username' id='username' className='sInput' onChange={handleChange} />
            <input type="email" placeholder='email' id='email' className='sInput' onChange={handleChange} />
            <input type="password" name="password" placeholder='password' id="password" className='sInput' onChange={handleChange}/>
            <input type="country" name="country" placeholder='country' id="country" className='sInput' onChange={handleChange}/>
            <input type="city" name="city" placeholder='city' id="city" className='sInput' onChange={handleChange}/>
            <input type="number" placeholder='contact no.' name="number" id="contact" className='sInput' onChange={handleChange}/>
            <button className='sButton' onClick={handleClick}>Register</button>
        </div>
    </div>
    </>
  )
}

export default Signup