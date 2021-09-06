import React, {useRef, useContext} from 'react'
import "./login.css"
import {Link} from "react-router-dom"
import {Context} from "../../context/Context"
import axios from "axios"
import { axiosInstance } from '../../config'

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();
    const {dispatch,isFetching} = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axiosInstance.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            console.log(res);
            dispatch({type:"LOGIN_SUCCESS", payload:res.data});
            window.location.replace("/")

        } catch(err) {
            dispatch({type:"LOGIN_FAILURE"});
        }
    };



    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
             <label>Username</label>
             <input className="loginInput" ref={userRef} type="text" placeholder="Enter Your Username..." />
             <label>Password</label>
             <input className="loginInput" ref={passwordRef} type="password" placeholder="Enter Your Password..." />
             <button  type="submit"  className="loginButton" disabled={isFetching}>Login</button>
             </form>
             {/* <button className="loginRegisterButton">
                 <Link className="link" to="/register">Register</Link>
             </button> */}
        </div>
    )
}
