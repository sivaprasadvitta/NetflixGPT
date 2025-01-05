import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'
import {VideosData} from '../utils/VideosData'
import { useSingleVideo } from '../utils/VideosData';

function VideoBackground({id}) {
  const [videos,setVideos] = useState(VideosData);
  const [singleVideo,setSingleVideo] = useState("")
  console.log(id)

  useEffect(() => {
      // Use the custom hook to get filtered videos
      const filteredVideos = useSingleVideo(id);
      if (filteredVideos.length > 0) {
        setSingleVideo(filteredVideos[0]); 
      }
  }, [id]);

  // console.log(singleVideo)


  // const getMoviesVideos = async()=>{
  //   const data = await fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
  //     API_OPTIONS
  //   )
  //   const json = await data.json();
  //   setVideos(json);
  // }

  // useEffect(()=>{
  //   getMoviesVideos();
  // },[])

  return (
    <div className='w-screen'>
      {
        <iframe 
          className='w-screen  aspect-video'
          src={`https://www.youtube.com/embed/${singleVideo.key}?autoplay=1&loop=1&mute=1&playlist=${singleVideo.key}`}
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        ></iframe>
        
      }
    </div>
  )
}

export default VideoBackground