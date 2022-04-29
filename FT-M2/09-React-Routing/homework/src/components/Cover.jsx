import React from 'react';
import "./Cover.css";
import porDefecto from "../media/video.mp4";
import nublado from "../media/nublado.mp4";
import soleado from "../media/soleado.mp4";
import lluvia from "../media/lluvia.mp4";
export default function Cover(props) {
    
    var coverVideo = porDefecto;
    /* soleado */
    if(props.img==="02d" || props.img===""){
        coverVideo=soleado;
    }
    /* lluvioso */
    else if(props.img==="05d"||props.img==="50d" || props.img==="10d" || props.img==="10n" || props.img==="09n"){
        coverVideo=lluvia;
    }
    /*nublado*/
    else if(props.img==="04d"||props.img==="04n"||props.img==="03n"){
        coverVideo=nublado;
    }
    return (
        <div className="cover-container">
            <video  classname="video" src={coverVideo} autoPlay loop muted></video>
        </div>
    )
}


