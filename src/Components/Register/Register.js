import React, { useState } from "react";
import "./Register.css";
const Register=()=>{

    const[user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

     const handleChange=(e)=>{
         const{name,value}=e.target
         setUser({
             ...user,
             [name]:value
         })
     }
    return(
        <div className="register">
            {console.log("User",user)}
            <h1>Registration</h1>
            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter Your Name"></input>
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter Your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Your Password"></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} placeholder="Re-Enter Password"></input>
            <div className="button">Registration</div>
            <div>or</div>
            <div className="button">Login</div>
        </div>
    )
    }
    export default Register;