import React, {useContext} from 'react'
import "./post.css";
import {Link} from "react-router-dom"
import {Context} from '../../context/Context';


export default function Post({post}) {
    const PF = "http://localhost:5000/images/"
    const {user} = useContext(Context);
    return (
        <>
        <div className="post">
            {post.photo && (

            <img className="postImg" src={PF + post.photo} alt="" />

            )}
           

            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => {
                        <span className="postCat">{c.name}</span>
                    })}
                </div>

                <Link className="link" to={`/post/${post._id}`}>
                <span className="postTitle">{post.title}</span>
                </Link>

                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                <p className="postDescription">
                    {post.desc}
                </p>
            </div>

        </div>

        </>
    )
}
