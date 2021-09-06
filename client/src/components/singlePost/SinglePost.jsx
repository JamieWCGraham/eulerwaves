
import React, { useState, useEffect, useContext} from 'react';
import "./singlePost.css";
import {useLocation} from 'react-router';
import axios from "axios";
import {Link} from "react-router-dom"
import {Context} from '../../context/Context';
import { Tex } from 'react-tex';
import { axiosInstance } from '../../config';
var Latex = require('react-latex');



export default function SinglePost() {

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post,setPost] = useState({})
    const PF = "http://localhost:5000/images/"
    const {user, dispatch} = useContext(Context);
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);


    useEffect(() => {
        const getPost = async () => {
            const res = await axiosInstance.get("/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        };
        getPost()
    },[path]); // [path] means whenever this path changes, execute useEffect


    const handleDelete = async (e) => {
        e.preventDefault();
        try{
            await axiosInstance.delete("/posts/" + path, {data: {username:user.username}});
            window.location.replace("/");
        }catch(err) {
            console.log(err);
        }
    }

    const handleUpdate = async () => {
        try{
            await axiosInstance.put("/posts/" + path, {username:user.username, title:title, desc:desc});
            setUpdateMode(false);
        }catch(err) {
            console.log(err);
        }
    }


    return (
        <div className="singlePost">
            <div className="singlePostWrapper">

                 {post.photo && (
                 <img className="singlePostImg" src={PF + post.photo} alt="" />
                 )}

                 {
                     updateMode ? (<input className="singlePostTitleInput" type="text" value={title} onChange={(e)=> setTitle(e.target.value)}
                     autoFocus />) : (

                        <h1 className="singlePostTitle">
                        {title}
                        {post.username === user?.username && (<div className="singlePostEdit">
                            <i className="singlePostIcon far fa-edit" onClick={()=> setUpdateMode(true)}></i>
                            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                       </div> )}
                        </h1>

                     )
                 }



                 <div className="singlePostInfo">
                     <span className="singlePostAuthor">
                         Author: 
                         <Link to={`/?user=${post.username}`} className="link">  
                         <b> {post.username}</b>
                         </Link> 
                     </span>
                     <span className="singlePostDate"> {new Date(post.createdAt).toDateString()} </span>
                 </div>

                 { updateMode ? <textarea value={desc} onChange={(e)=> setDesc(e.target.value)} className="singlePostDescInput" /> : (
                    //  <p className="singlePostDescription"> {desc} </p>
                    <p className="singlePostDescription">  <Latex displayMode={true} globalGroup={true} strict="ignore" >{desc}</Latex> </p>
                    // <p className="singlePostDescription">  <Tex texContent={desc}></Tex> </p>
                   
                 )}
     
                {
                 updateMode ? <button className="singlePostButton" onClick={handleUpdate}>Update</button> : null
                }

            </div>
        </div>
    )
}
