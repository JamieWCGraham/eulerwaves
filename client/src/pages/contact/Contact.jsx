import React, { useState, useEffect, useContext} from 'react';
import "./contact.css";
import jamieGrahamImage from "../../components/images/jamie.png"


export default function Contact() {

    return (
        <div className="contact">
        
        <div className="contactInfo">
            <img className="jamie" src={jamieGrahamImage} alt="image" />
            <div className="innerInfo">
             <h1 className="contactMe">Contact Me</h1>
             <br/>
             <br/>
             <ul className="innerList">
                 <li><b>UWO Email</b>: Jgrah52@uwo.ca</li>
                 <li><b>General Email</b>: Jgraham0@msn.com</li>
                 <li><b>Phone</b>: 6475001232</li>
             </ul>
            </div>
        </div>

        <div>
            <img className="contactImg" src="https://cdn.wallpapersafari.com/47/8/fKiFaG.jpg" alt="">
            </img>
        </div>
        </div>
        
    )
}
