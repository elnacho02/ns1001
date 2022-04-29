import React from 'react';
import coverVideo from "../media/video (1).mp4";
import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
    return (
        <nav>
            <div className="video-container">
                <video src={coverVideo} autoPlay loop muted></video>
            </div>
            <div className="nav-container">
                <Link to='/' >
                    <h2 className="homeclick">WEATHER APP</h2>
                </Link>
                <Link to='/about' >
                    <h4 className="about">About Me</h4>
                </Link>   
                
            </div>
        </nav>
    )
}

export default NavBar
