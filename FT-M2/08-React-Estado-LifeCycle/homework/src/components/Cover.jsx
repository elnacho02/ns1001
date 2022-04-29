import React from 'react';
import coverVideo from "../media/video.mp4";
import "./Cover.css";

export default function Cover(props) {

if(props.city.length<1){
    return (
        <div className="cover-container">
        <video  classname="video" src={coverVideo} autoPlay loop muted></video>
        </div>
    )}
else{
        return(
            <div>
                
            </div>
        )
    }
}


