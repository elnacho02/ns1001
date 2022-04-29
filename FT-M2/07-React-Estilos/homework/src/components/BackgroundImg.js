import React from 'react'

function BackgroundImg(props) {
    var bgImg = "";
    if(props.img==="03n"){
        bgImg = "https://p4.wallpaperbetter.com/wallpaper/183/387/618/sunny-day-summer-hd-wallpaper-wallpaper-preview.jpg";
    }
    else if(props.img==="09d"){
        bgImg = "https://nexodiario.com/wp-content/uploads/2017/08/29-5_Clima_1.jpg"
    }
    return (
        <img src={bgImg} alt=""/>
    )
}

export default BackgroundImg

