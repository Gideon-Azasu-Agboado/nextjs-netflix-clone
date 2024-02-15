import Image from 'next/image';
import React from 'react'
import { baseUrl } from '../utils/constant';
import { FaPlay } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { AiOutlineClose } from 'react-icons/ai';

import ReactPlayer from 'react-player';

const MovieDetails = ({ movie, showPlayer, setShowPlayer, trailerUrl }) => {
    // console.log('movies : ', movie)
    // console.log('trailer : ', trailerUrl)


    return (
        <div className="relative bg-gradient-to-b from-teal-950/80 from-10% via-transparent via-30% to-[#010511] t0-60%">
            <div className='flex flex-col space-y-2 py-18 h-screen justify-center'>
                <div className='absolute top-0 left-0 -z-10 w-screen h-screen'>
                    <Image
                        fill
                        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                        className='object-cover'
                        alt='movie poster'
                    />
                </div>

                <div className='m-auto flex flex-col justify-between pt-[200px] sm:pt-[500px] z-50 px-[7%]'>

                    <h1 className='text-2xl font-bold text-orange-200 md:text-4xl'>
                        {movie.title || movie?.name || movie?.original_name}
                    </h1>

                    <div className='w-full sm:w-[60%] pt-[30px]'>
                        <p className='text-xl text-slate-300'>
                            {movie.overview}
                        </p>
                    </div>

                    <div className='flex space-x-3 mt-[30px]'>
                        <button className='h-[40px] w-[150px] bg-slate-200 text-black rounded-lg flex items-center justify-center cursor-pointer'
                        onClick={() => {setShowPlayer(true)}}
                        >
                            <FaPlay size={20} className='text-slate=800  pr-2' />
                            Play
                        </button>

                        <button className='h-[40px] w-[150px] bg-[gray]/50 text-slate-200 rounded-lg flex items-center justify-center cursor-pointer'>
                            <MdInfo size={30} className='text-slate-200  pr-2' />
                            More Info
                        </button>
                    </div>
                </div>

                <div className={`absolute top-3 inset-x-[7%] rounded overflow-hidden transtion duration-1000 
                    ${showPlayer ? 'opacity-100 z-50' : 'opacity-0 -z-50'}
                    `}>

                        <div className='flex items-center justify-between bg-black text-[#f9f9f9] p-3.5'>
                            <span className='font-semibold'>
                                Play Trailer
                            </span>

                            <div className='cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:bg-[#0f0f0f]'
                                onClick={() => setShowPlayer(false)}
                            >
                                <AiOutlineClose size={25} />
                            </div>
                        </div>

                        <div className='relative pt-[56%]'>
                             <ReactPlayer
                                url={trailerUrl}
                                width='100%'
                                height='100%'
                                style={{ position: 'absolute', top: '0', left: '0' }}
                                controls={true}
                                playing={showPlayer}
                            />
                        </div>
                    </div>

            </div>
        </div>
    )
}


export default MovieDetails;