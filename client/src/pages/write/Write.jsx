
import React from 'react';
import "./write.css";
import { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {Context} from '../../context/Context';
import { axiosInstance } from '../../config';


export default function Write() {

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [file,setFile] = useState(null);
    const {user, dispatch} = useContext(Context);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            desc,
        }
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name ;
            data.append("name",filename) ;
            data.append("file",file) ;
            newPost.photo = filename;
            try{
                await axiosInstance.post("/upload", data);
            } catch(err) {
                console.log(err)
            }
        }
        try {
            const res = await axiosInstance.post("/posts",newPost);
            window.location.replace("/post/" + res.data._id);
        } catch(err) {
            console.log(err)
        }

    }

    return (
        <div className="write">
            {file && (
            <img 
            className="writeImg"
            src={URL.createObjectURL(file)}
            alt="" 
            /> )}
            <form action="" className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} onChange={(e) => {
                        setFile(e.target.files[0])
                    }} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={(e) => {
                        setTitle(e.target.value)
                    }}/>
                </div>

                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" onChange={(e) => {
                        setDesc(e.target.value)
                    }}></textarea>
                </div>

                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}
