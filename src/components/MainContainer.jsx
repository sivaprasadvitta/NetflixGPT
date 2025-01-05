import { useState } from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = ({movie}) =>{
    // console.log(movie)
    const {original_title,overview,id} = movie;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground id={id}/>
            
        </div>
    )
}
export default MainContainer;