'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { GoStarFill } from "react-icons/go";


const Thumbnail = ({ movie }) => {
    const [loading, setLoading] = useState(true);
    const [loadingMovie, setLoadingMovie] = useState(false); 
    const [onHover, setOnHover] = useState(false);


    useEffect(() => {
        if (movie != 'null') {
            setLoading(false)
        }
    }, [])

    return (
        <div className='-mt-20'>
            {
                loading
                    ?
                    <div className='relative h-[180px] sm:h-36 min-w-[260px] bg-gray-800 animate-pulse rounded-lg'>
                        {/* loading container */}
                    </div>
                    :
                    <div className='flex flex-col group'>
                        <div className={
                            onHover
                            ?
                            `relative min-w-[260px] bg-gray-800 z-10 top-10 rounded-xl p-7 opacity-100 transition duration-700`
                            :
                            `relative min-w-[260px] bg-gray-800 z-10 top-10 rounded-xl p-7 opacity-0 transition duration-700`
                        }>
                            <h3 className='text-slate-300 text-[16px]'>{movie.title}</h3>

                            <div className='flex justify-between items-center pt-4'>
                                <div className='text-orange-500 text-[14px]'>
                                    {movie.release_date}
                                </div>

                                <div className='text-orange-500 text-[14px]'>
                                    {movie.original_language.toUpperCase()}
                                </div>

                                <div className='flex items-center text-orange-500 text-[14px] border-[1px] border-orange-500 px-2 rounded-xl'>
                                    {parseFloat(Math.round(movie.vote_average * 10) / 10)}
                                    <GoStarFill size={15} />
                                </div>
                            </div>
                        </div>
                        
                        <Link
                            href={`/${movie.id}`}
                            className='relative h-[180px] sm:h-36 min-w-[260px] cursor-pointer rounded-lg transition duration-700 ease-out hover:scale-110 hover:-translate-y-2'
                            onClick={() => setLoadingMovie(true)}
                            onMouseEnter={() => setOnHover(true)}
                            onMouseLeave={() => setOnHover(false)}
                        >
                            <div className='w-full h-full'>
                                <div className={
                                    loadingMovie
                                        ?
                                        `text-orange-300 text-xl z-50 absolute ml-[110px] mt-[55px] opacity-100 animate-spin`
                                        :
                                        `text-orange-300 text-xl z-50 absolute ml-[100px] mt-[55px] opacity-0`
                                }
                                >
                                    <CgSpinnerTwoAlt size={30} />
                                </div>
                                <div className={
                                    loadingMovie
                                        ?
                                        `w-full h-full rounded-lg top-0 left-0 bg-gradient-to-b from-teal-800 opacity-60 `
                                        :
                                        ``
                                }>
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path || movie?.poster_path}`}
                                        className='rounded-lg object-cover'
                                        fill
                                        alt='movie poster'
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>

            }
        </div>
    )
}

export default Thumbnail;