import React, {useEffect,useState} from 'react';
import "./sidebar.css";
import axios from "axios";
import {Link} from "react-router-dom";
import { axiosInstance } from '../../config';


export default function Sidebar() {
    const [cats,setCats] = useState([]);

    useEffect(()=> {
        const getCats = async () => {
            const res = await axiosInstance.get("/categories");
            setCats(res.data);
        };
        getCats();
    },[]);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://www.indivstock.com/static40/preview1/stock-photo-an-ocean-waves-background-texture-3d-illustration-570068.jpg"></img>
                <p>Welcome! My name is Jamie Graham and I'm currently a physics research assistant based in Toronto, Ontario. <br/> <br/>This blog is intended to chronicle the theoretical fluid dynamics research I conducted with Katie Oliveras (Dept. Mathematics, Seattle University) and Olga Trichtchenko (Dept. Applied Math/Physics, UWO) in the summer of 2021. <br/> <br/> The goal of this research is to construct a novel systematic, non-local method for generating conservation laws of the 3D hydrodynamic problem, which describes the dynamics of an invsicid, incompressible, irrotational fluid propagating in 3D. <br/> <br/> This work attempts to generalize the work of Katie and Salvatore Calatola-Young on the 2D problem to the more complicated 3D problem. Benjamin and Olver presented a systematic derivation of these laws in 1982. Rather than taking their standard approach in classical mechanics of relying on infinitesimal symmetries to generate conservation laws (Noetherian/Lie Group Approach), we take the non-local AFM formulation and attempt a brute force construction of the conservation laws through a weak formulation of the problem.  <br/> <br/> The entries in this blog represent significant milestones in the research, and attempt to illustrate the theoretical basis of the approaches in this research from first principles. This blog is intended to be written at a level such that an undergraduate student studying applied math/physics/engineering could understand it. We assume prior knowledge of linear algebra, multivariable calculus, and ordinary and partial differential equations. </p>
            </div>   

            {/* <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">  
                          <li className="sidebarListItem">{c.name}</li>
                        </Link> 
                    ))}
                </ul>
            </div>    */}

            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <a href="https://www.facebook.com/Jamie.Wing.Chee.Graham/?show_switched_toast=0&show_switched_tooltip=0&show_podcast_settings=0"><i className= "topIcon fab fa-facebook-square"></i></a>
                    <a href="https://github.com/JamieWCGraham"><i className= "topIcon fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/jamie-graham-57a6171aa/"><i className= "topIcon fab fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/jamie.graham.music/"><i className= "topIcon fab fa-instagram-square"></i></a>
                </div>
            </div>   

        </div>
        
    )
}
