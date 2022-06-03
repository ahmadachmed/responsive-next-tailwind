import React from 'react'
import Image from "next/image"
import { ThumbUpIcon } from '@heroicons/react/outline';

function Thumbnail({result}) {
 const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className='group cursor-pointer p-2 transition duration-300 ease-in transform sm:hover:scale-105 hover:z-50'>
        <Image
        src={''+BASE_URL+result.backdrop_path || result.poster_path || BASE_URL+result.poster_path}
        layout='responsive'
        height={1080}
        width={1920}/>
        <div className='py-2'>
            <h2 className='text-lg font-semibold group-hover:font-bold transition-all group-hover:text-2xl ease-in-out duration-300'>{result.name || result.title}</h2>
            <p className='truncate max-w-md'>{result.overview}</p>
            <div className='flex items-center justify-between'>  
                <div className='text-slate-400'>
                    <p className='text-md font-light'>{result.media_type}</p>
                    <p className='text-sm font-extralight'> {result.first_air_date || result.release_date}</p>
                </div>
                <div className='items-center justify-center opacity-0 group-hover:opacity-100 ease-in-out duration-300'>
                    <ThumbUpIcon className='h-5'/>
                    <p className='text-slate-400 text-md font-light'>{result.vote_average}</p>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Thumbnail