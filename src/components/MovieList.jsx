import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { NowPlayingMoviesList } from '../utils/constants';

function MovieList({ title, movies }) {
  const path = movies[0].results[0].poster_path
  const [moviesList, setMoviesList] = useState(NowPlayingMoviesList[0].results);

  // console.log(moviesList)

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <div className='flex w-screen gap-5 overflow-x-scroll'>
        {
          moviesList.map((movie) => {
            // console.log(movie.id)
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />
          })
        }
      </div>
    </div>
  )
}

export default MovieList