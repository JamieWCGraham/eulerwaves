import React, {useState} from 'react'
import "./register.css"
import {Link} from "react-router-dom"
import axios from "axios"
import { axiosInstance } from '../../config';

export default function Register() {

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false);

    const handleSubmit = async (e) => {
            e.preventDefault();
            setError(false);
            try{
            const res = await axiosInstance.post("/auth/register", {
                username,
                email,
                password
            });
            res.data && window.location.replace("/login");
            } catch(err) {
                setError(true);
            }
    };

    
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" onSubmit={handleSubmit}>

             <label>Username</label>
             <input className="loginInput" type="text" 
             onChange={(e)=>setUsername(e.target.value)}
             placeholder="Enter Your Username..." />

             <label>Email</label>
             <input className="loginInput" type="text" 
              onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email..." />


             <label>Password</label>
             <input className="registerInput"  type="password" 
             onChange={(e)=>setPassword(e.target.value)}placeholder="Enter Your Password..." />


             <button className="registerButton" type="submit">Register</button>
             </form>
             <button className="registerLoginButton">

               <Link className="link" to="/login">Login</Link>
              </button>
            {error && <span style={{color:"red", marginTop:"10px"}}>Something Went Wrong!</span>}
        </div>
    )
}
