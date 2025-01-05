import React from 'react'
import { IMG_CDN } from '../utils/constants'

function MovieCard({posterPath}) {
  return (
    <>
      <img 
        className='h-96 w-full rounded-lg '
        src={`https://image.tmdb.org/t/p/w780${posterPath}`} 
        alt="img" 
      />
    </>
  )
}

export default MovieCard