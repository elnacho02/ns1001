import React from 'react'


function BackgroundImg(props) {
    var elem = props.city
    var bgImg = "";
    /* soleado */
    if(elem.img==="02d" || elem.img===""){
        bgImg = "https://p4.wallpaperbetter.com/wallpaper/183/387/618/sunny-day-summer-hd-wallpaper-wallpaper-preview.jpg";
    }
    /* lluvioso */
    else if(elem.img==="05d"||elem.img==="50d" || elem.img==="10d" || elem.img==="10n"){
        bgImg = "https://images.pexels.com/photos/1028600/pexels-photo-1028600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
    /*nublado*/
    else if(elem.img==="04d"||elem.img==="04n"||elem.img==="03n"){
        bgImg = "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
    if(bgImg.length){
        return (
        <img classname={`bgImg.length ? "img1" : null}`}src={bgImg} alt="" />
       )}
    else{return(
           <div>
               
           </div>
           
    )}
}

export default BackgroundImg

