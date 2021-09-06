import React from 'react';
import {Link} from "react-router-dom"
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";


export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "https://eulerwaves.herokuapp.com/api/images/"

    const handleLogout = async() => {
        await dispatch({type: "LOGOUT"});
    };

    return (
        <div className="top">
            <div className="topLeft">
            <a href="https://www.facebook.com/Jamie.Wing.Chee.Graham/?show_switched_toast=0&show_switched_tooltip=0&show_podcast_settings=0"><i className= "topIcon fab fa-facebook-square"></i></a>
            <a href="https://github.com/JamieWCGraham"><i className= "topIcon fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/jamie-graham-57a6171aa/"><i className= "topIcon fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/jamie.graham.music/"><i className= "topIcon fab fa-instagram-square"></i></a>
            </div>
            <div className="topMiddle">
                 <ul className="topList">
                     <li className="topListItem">
                     <Link to="/" className="link">HOME</Link>
                     </li>
                     <li className="topListItem">
                         <Link to="/about" className="link">CV</Link>
                     </li>
                     <li className="topListItem">
                      <Link to="/contact" className="link">CONTACT</Link>
                     </li> 
                     <li className="topListItem">
                     <Link to="/write" className="link">WRITE</Link>
                     </li>
                     <li className="topListItem" onClick={handleLogout}>
                         {user && "LOGOUT"}
                     </li>               
                 </ul>
            </div>
            <div className="topRight">
                {user ? 
                (
                  <Link to="/settings" className="link">
                    <div className="imgAndTitle">
                    <img className="topImg" src={PF + user.profilePic} alt="image" />
                    <h4 className="iconTitle">{user.username}</h4>
                    {/* <i className= "topSearchIcon fas fa-search"></i> */}
                    </div>
                  </Link>

                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link to="/login" className="link">LOGIN</Link>
                        </li>
                        {/* <li className="topListItem">
                            <Link to="/register" className="link">REGISTER</Link>
                        </li> */}
                    </ul>
                )}
            </div>
        </div>
    )
}
