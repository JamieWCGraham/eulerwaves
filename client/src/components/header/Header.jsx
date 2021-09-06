import React from 'react'
import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Fluid Dynamics Research Blog</span>
                <span className="headerTitleLg">Euler Waves</span>
            </div>
            <img className="headerImg" src="https://cdn.wallpapersafari.com/47/8/fKiFaG.jpg" alt="">
            </img>
        </div>
    )
}
