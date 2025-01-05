import React from 'react'

function VideoTitle({title,overview}) {
  return (

    <div className='w-screen aspect-video pt-36 px-12 absolute bg-gradient-to-r from-black text-white '>
      <div className='mt-40'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div className='flex gap-3'>
          <button 
            className='bg-gray-400 text-white p-3 px-16 text-xl rounded-lg hover:bg-black hover:text-white hover:border border-gray-400'>
            ▶️Play
          </button>
          <button 
            className='border border-gray-400 p-4 px-13 text-xl rounded-lg hover:bg-gray-400 hover:text-white'>
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle